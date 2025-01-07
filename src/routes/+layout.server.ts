import { createClient } from '$lib/prismicio'
import { redirect } from '@sveltejs/kit'

export async function load({ fetch, cookies, locals, url }) {
  const client = createClient({ fetch, cookies })
  const settings = await client.getSingle('settings')


  return {
    settings,
    user: locals.user,
  }
}

// List of routes that don't require authentication
