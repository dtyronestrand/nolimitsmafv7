<script>
  import { PrismicRichText, SliceZone } from '@prismicio/svelte'

  import { components } from '$lib/slices'

  export let data
</script>

<PrismicRichText field={data.page.data.title} />
<SliceZone slices={data.slices} {components} />
