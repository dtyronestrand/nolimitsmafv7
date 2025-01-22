import { createClient } from '$lib/prismicio'

export async function load({ fetch, cookies, locals }) {
  const client = createClient({ fetch, cookies })
  const settings = await client.getSingle('settings')

  return {
    settings,
    user: locals.user,
  }
}
