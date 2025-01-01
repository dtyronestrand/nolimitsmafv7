import { Client, isFilled, type Content, type SliceMapper } from '@prismicio/client'
import type { ComponentProps } from 'svelte'
import Videos from './index.svelte'
import type { VideoDocument } from '../../../prismicio-types'
type Context = { client: Client<Content.AllDocumentTypes> }
const mapper: SliceMapper<Content.VideosSlice, ComponentProps<Videos>, Context> = async ({
  slice,
  context,
}) => {
  const { client } = context
  const videos = (
    await Promise.all(
      slice.primary.video.map(async video => {
        if (isFilled.contentRelationship(video.video)) {
          return await client.getByID(video.video.id)
        }
      }),
    )
  ).filter((video): video is VideoDocument => video !== undefined)
  return {
    slice,
    videos: videos,
  }
}

export default mapper
