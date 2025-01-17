<script lang="ts">
  import { PrismicRichText, SliceZone } from '@prismicio/svelte'
  import { onMount } from 'svelte'
  import { components } from '$lib/slices'

  let { data } = $props();

  onMount(() => {
    console.log('Videoindex page mounted', data)
  })
</script>

<PrismicRichText field={data.page.data.title} />
<SliceZone slices={data.slices} {components} />
