import { createClient } from '$lib/prismicio'

export async function load({ fetch, cookies, locals }) {
  const client = createClient({ fetch, cookies })
  const menu = await client.getSingle('usermenu')

  return {
    menu,
    user: locals.user,
  }
}
