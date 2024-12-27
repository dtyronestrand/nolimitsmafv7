<script lang="ts">
  import type { Content } from '@prismicio/client'
  import { PrismicRichText } from '@prismicio/svelte'

  export let slice: Content.RichTextSlice
</script>

<section class="prose prose-invert mx-auto mt-7 md:mt-11 container">
  <PrismicRichText field={slice.primary.content} />
</section>

<style>
  .container {
    max-width: 600px;
    margin: 6em auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
</style>
