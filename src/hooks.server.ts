import { pb } from '$lib/pocketbase'
import type { Handle } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'
export const handle: Handle = async ({ event, resolve }) => {
  // Get the auth cookie from the request headers
  const cookie = event.request.headers.get('cookie') || ''
  pb.authStore.loadFromCookie(cookie)

  try {
    // If we have a valid auth, try to refresh it
    if (pb.authStore.isValid) {
      await pb.collection('users').authRefresh()
    }
  } catch {
    // If refresh fails, clear the auth
    pb.authStore.clear()
  }

  event.locals.pb = pb
  event.locals.user = pb.authStore.model

  const protectedRoutes = [
    {
      pattern: /^\/admin/,
      roles: ['Admin'],
    },
    { pattern: /^\/videoindex/, roles: ['Member', 'Admin', 'Staff'] },
    { pattern: /^\/profile/, roles: ['User, Admin, Staff'] },
  ]

  const currentPath = event.url.pathname
  const protectedRoute = protectedRoutes.find(route => route.pattern.test(currentPath))
  if (protectedRoute) {
    if (!event.locals.user) {
      throw redirect(303, '/register')
    }
    const userRole = event.locals.user.role
    if (!protectedRoute.roles.includes(userRole)) {
      throw redirect(303, '/unauthorized')
    }
  }
  const response = await resolve(event)

  // Set the latest cookie with a longer maxAge
  response.headers.set(
    'set-cookie',
    pb.authStore.exportToCookie({ httpOnly: false, secure: false, maxAge: 7 * 24 * 60 * 60 }),
  )

  return response
}
