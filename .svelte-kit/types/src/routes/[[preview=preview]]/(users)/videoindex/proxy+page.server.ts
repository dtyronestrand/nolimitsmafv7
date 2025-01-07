// @ts-nocheck
import { createClient } from '$lib/prismicio'
import { asText } from '@prismicio/client'
import type {Actions} from './$types'
import { redirect } from '@sveltejs/kit'

export async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies })

  const page = await client.getByUID('program', params.uid)
  
  return {
    page,

    title: asText(page.data.program_title),
    meta_description: page.data.meta_description,
    meta_title: page.data.meta_title,
    meta_image: page.data.meta_image.url,
  }
}

export async function entries() {
  const client = createClient()

  const pages = await client.getAllByType('program')

  return pages.map(page => {
    return { uid: page.uid }
  })
}

export const actions = {
  default: async({locals, request}: import('./$types').RequestEvent) => {
    const data = Object.fromEntries(await request.formData()) as{
      firstName: string,
      lastName: string,
      email: string,
      branch: string,
    }
    try {
      await locals.pb.collection('users').update(data)
    } catch (e) {
      console.error(e)
      throw e
    }
    throw redirect(303, '/program')
  },
};null as any as Actions;