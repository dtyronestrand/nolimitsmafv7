import { createClient } from '$lib/prismicio'

export async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies })
  const programMenus = await client.getAllByType('programmenu')

    



  return {
    programMenus,

  }

 }

