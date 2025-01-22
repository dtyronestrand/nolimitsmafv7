import type { PageLoad } from './$types'
import { asText } from '@prismicio/client'
export const load: PageLoad = async ({ url, data }) => {
  return {
    page: data.page,
    title: asText(data.page.data.title),
    meta_description: data.page.data.meta_description,
    meta_title: data.page.data.meta_title,
    meta_image: data.page.data.meta_image.url,
    currentPath: url.pathname,
  }
}
