import {createClient} from '$lib/prismicio'

export async function load({params, fetch, cookies}) {
  const client = createClient({fetch, cookies})
  const page = await client.getByUID('video', params.uid)
  return {
    page
  }
}

export async function entries() {
    const client = createClient()
  
    const pages = await client.getAllByType('video')
  
    return pages.map(page => {
      return { uid: page.uid }
    })
  }