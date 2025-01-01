import { asText, mapSliceZone } from '@prismicio/client'
import { mappers } from '$lib/slices/mappers'
import { createClient } from '$lib/prismicio'

export async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies })

  const page = await client.getByUID('page', params.uid)
  const slices = await mapSliceZone(page.data.slices, mappers, { client })
 
             
  return {
    slices,
    title: asText(page.data.title),
    meta_description: page.data.meta_description,
    meta_title: page.data.meta_title,
    meta_image: page.data.meta_image.url,
  }
}

export function entries() {
  return [{ uid: 'page' }]
}
