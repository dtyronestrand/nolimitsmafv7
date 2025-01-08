<script>
  import { PrismicRichText, SliceZone } from '@prismicio/svelte'
import { onMount } from 'svelte'
  import { components } from '$lib/slices'

  export let data

  onMount(() => {
    console.log('Videoindex page mounted', data)
  })
</script>

<PrismicRichText field={data.page.data.title} />
<SliceZone slices={data.slices} {components} />
