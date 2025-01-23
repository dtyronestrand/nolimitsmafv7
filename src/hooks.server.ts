import { pb } from '$lib/pocketbase'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  const cookieString = event.request.headers.get('cookie') || ''

  pb.authStore.loadFromCookie(cookieString)

  try {
    // if we have a valid auth, try to refresh it
    if (pb.authStore.isValid) {
      await pb.collection('users').authRefresh()
    }
  } catch (_) {
    // clear the auth store on failed refresh
    pb.authStore.clear()
  }

  // set the user in locals
  event.locals.pb = pb
  event.locals.user = pb.authStore.model

  const response = await resolve(event)

  // update the cookie if auth state has changed
  if (pb.authStore.isValid) {
    const cookie = pb.authStore.exportToCookie({
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
      path: '/',
    })
    response.headers.append('set-cookie', cookie)
  }

  return response
}
