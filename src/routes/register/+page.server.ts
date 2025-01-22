import type { Actions } from './$types'
import { pb } from '$lib/pocketbase'
import { redirect } from '@sveltejs/kit'
let email = ''
let password = ''
export const actions = {
  login: async ({ cookies, request }) => {
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
      await pb.collection('users').authWithPassword(email, password)

      throw redirect(303, '/') // Redirect to home page after login
    } catch (err) {
      let error = err instanceof Error ? err.message : 'Login failed'
    }
  },
} satisfies Actions
