<script lang="ts">
  import type { Content } from '@prismicio/client'
  import { asText } from '@prismicio/client'
  import { PrismicEmbed, PrismicRichText, PrismicText } from '@prismicio/svelte'

  interface Props {
    videos: Content.VideoDocument[];
    slice: Content.VideosSlice;
  }

  let { videos, slice }: Props = $props();
  console.log('videos:', videos)
  console.log('slice:', slice)

  if (!Array.isArray(videos)) {
    throw new Error('`videos` must be an array')
  }

  function getThumbnail(url: string) {
    const match = url.match(/watch\?v=(.*?)(&|$)/)
    const videoId = match ? match[1] : ''
    return {
      videoId,
    }
  }
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  <div class="col-lg-4">
    <div class="carousel">
      <span>
        {#each videos as video}
          <a href={video.data.video} target="slider1">
            <img src="https://img.youtube.com/vi/{video.data.thumbnail}/hqdefault.jpg" />
          </a>
        {/each}
      </span>
      <div><iframe src="" allowfullscreen frameborder="0" name="slider1"></iframe></div>
    </div>
  </div>
</section>

<style>
  .carousel {
    padding: 0.3em 0.3em 0;
    @apply bg-surface-900;
    text-align: center;
  }
  .carousel div {
    position: relative;
    margin-bottom: 0.3em;
    padding-top: 56.25%;
  }
  .carousel iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .carousel span {
    display: inline-block;
    word-spacing: 1em; /* расстояние между картинками */

    /* прокрутка миниатюр при необходимости */
    overflow: auto;
    white-space: nowrap;
    word-wrap: normal;
  }
  .carousel a {
    position: relative;
    display: inline-block;
    max-width: 360px; /* максимальная ширина миниатюр */
    width: 75%; /* ширина миниатюр */
    border: 1px solid blue; /* рамка вокруг миниатюр */
    opacity: 0.7;
    text-decoration: none;
  }
  .carousel a:visited,
  .carousel a:nth-of-type(1) {
    border-color: #555; /* рамка вокруг миниатюр просмотренных видео */
  }
  .carousel a:hover {
    opacity: 1;
  }
  .carousel a:not(:active):focus {
    pointer-events: none;
  }
  .carousel a::before {
    content: '';
    position: absolute;
    top: 0em;
    right: 0em;
    bottom: 0em;
    left: 0em;
    background: rgba(0, 0, 1, 0.1);
    transition: background 0s 9999999s;
  }
  .carousel a:nth-of-type(1)::before {
    background: rgba(255, 255, 254, 0.7);
  }
  .carousel span:active a::before {
    background: rgba(0, 0, 0, 0);
    transition: background 0s;
  }
  .carousel span:active a:active::before {
    background: rgba(255, 255, 255, 0.7);
    transition: background 0s;
  }
  .carousel img {
    max-width: 100%;
    vertical-align: middle; /* убрать нижний отступ до рамки под картинкой */
  }
</style>
