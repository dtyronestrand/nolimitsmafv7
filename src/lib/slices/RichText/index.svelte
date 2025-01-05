<script lang="ts">
  import type { Content } from '@prismicio/client'
  import { PrismicRichText } from '@prismicio/svelte'
  import Heading1 from '$lib/components/Heading1.svelte'
  import Paragraph from '$lib/components/Paragraph.svelte'
  import Bounded from '$lib/components/Bounded.svelte'
  export let slice: Content.RichTextSlice
</script>

<Bounded class="prose prose-invert mx-auto mt-7 md:mt-11 container">
  <PrismicRichText
    field={slice.primary.content}
    components={{ heading1: Heading1, paragraph: Paragraph }}
  />
</Bounded>
