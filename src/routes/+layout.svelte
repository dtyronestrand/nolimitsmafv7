<script lang="ts">
  import '../app.css'
  import '@fontsource/protest-riot'
  import { PrismicPreview } from '@prismicio/svelte/kit'
  import { page } from '$app/stores'
  import { repositoryName } from '$lib/prismicio'
  import { currentUser } from '$lib/pocketbase'
  import { fade } from 'svelte/transition'
  import { onNavigate } from '$app/navigation'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { onMount } from 'svelte'
  import { pb } from '$lib/pocketbase'
  onMount(() => {
    // Update the store with the initial auth state

    if (pb.authStore.isValid) {
      currentUser.set(pb.authStore.model)
    }
  })

  console.log('Is auth valid:', pb.authStore.isValid)
  console.log('Current token:', pb.authStore.token)
  onNavigate(navigation => {
    if (!document.startViewTransition) return
    return new Promise(resolve => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })

  export let data: { settings: any; user: any; currentPath: string }
  let { currentPath } = data
</script>

<svelte:head>
  <title>{$page.data.title}</title>
  {#if $page.data.meta_description}
    <meta name="description" content={$page.data.meta_description} />
  {/if}
  {#if $page.data.meta_title}
    <meta name="og:title" content={$page.data.meta_title} />
  {/if}
  {#if $page.data.meta_image}
    <meta name="og:image" content={$page.data.meta_image} />
    <meta name="twitter:card" content="summary_large_image" />
  {/if}
</svelte:head>

<Header settings={$page.data.settings} />

{#key currentPath}
  <div in:fade|local={{ duration: 300, delay: 600 }} out:fade|local={{ duration: 300 }}>
    <slot />
  </div>
{/key}

<Footer settings={$page.data.settings} />
<PrismicPreview {repositoryName} />
