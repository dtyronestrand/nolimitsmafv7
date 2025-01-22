import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({
  url,
  data,
}: {
  url: URL
  data: { settings: any; user: any }
}) => {
  return {
    settings: data.settings,
    user: data.user,
    currentPath: url.pathname,
  }
}
