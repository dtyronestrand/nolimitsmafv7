import type { Actions } from './$types'
import { pb } from '$lib/pocketbase'
import { redirect } from '@sveltejs/kit'
let email = ''
let password = ''
export const actions = {
  login: async ({ cookies, request, locals }) => {
    const data = await request.formData()
    const emailValue = data.get('email')
    const passwordValue = data.get('password')

    if (
      !emailValue ||
      !passwordValue ||
      typeof emailValue !== 'string' ||
      typeof passwordValue !== 'string'
    ) {
      return {
        error: 'Email and password are required',
      }
    }

    email = emailValue
    password = passwordValue
    try {
      const authData = await pb.collection('users').authWithPassword(email, password)
      locals.user = authData.record

      // Set the cookie first
      cookies.set('pb_auth', pb.authStore.exportToCookie(), {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        path: '/',
      })

      throw redirect(303, '/')
    } catch (err) {
      if (err instanceof Error && err.message.includes('303')) {
        throw err // Re-throw the redirect
      }
      return {
        error: err instanceof Error ? err.message : 'Login failed',
      }
    }
  },
} satisfies Actions
