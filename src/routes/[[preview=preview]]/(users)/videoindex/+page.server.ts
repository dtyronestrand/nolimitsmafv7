import { createClient } from '$lib/prismicio'
import { mapSliceZone } from '@prismicio/client'
import { mappers } from '$lib/slices/mappers'
export async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies })

  const page = await client.getSingle('videoindex')
  const slices = await mapSliceZone(page.data.slices, mappers, { client })
  return {
    page,
    slices,
  }
}

export async function entries() {
  return [{}]
}
