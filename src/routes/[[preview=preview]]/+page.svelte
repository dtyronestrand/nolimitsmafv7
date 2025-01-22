<script>
  import { SliceZone } from '@prismicio/svelte'
  import { fly, fade } from 'svelte/transition'
  import { onNavigate } from '$app/navigation'
  import { components } from '$lib/slices'

  export let data
  onNavigate(navigation => {
    if (!document.startViewTransition) return
    return new Promise(resolve => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
</script>

{#key data.currentPath}
  <div in:fly|local={{ duration: 4000, delay: 4500 }} out:fly|local={{ duration: 4000 }}>
    <SliceZone slices={data.page.data.slices} {components} />
  </div>
{/key}
