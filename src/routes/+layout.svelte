<script lang="ts">
  import '../app.css'
  import '@fontsource/protest-riot'
  import { PrismicPreview } from '@prismicio/svelte/kit'
  import { page } from '$app/stores'
  import { repositoryName } from '$lib/prismicio'
  import { currentUser } from '$lib/pocketbase'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { pb } from '$lib/pocketbase'
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
  onMount(() => {
    // Update the store with the initial auth state

    if (pb.authStore.isValid) {
      currentUser.set(pb.authStore.model)
    }
  })
  console.log('Is auth valid:', pb.authStore.isValid)
  console.log('Current token:', pb.authStore.token)
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
<main>
  {@render children?.()}
</main>

<Footer settings={$page.data.settings} />
<PrismicPreview {repositoryName} />
