import { createClient } from '$lib/prismicio'

export async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies })
  const settings = await client.getSingle('settings')
  const tkdcsnav = await client.getSingle('tkdcsnav')
  return {
    settings,
    tkdcsnav,
  }
}
