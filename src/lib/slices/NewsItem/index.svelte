<script lang="ts">
  import Bounded from '$lib/components/Bounded.svelte'
  import type { Content } from '@prismicio/client'
  import Heading3 from '$lib/components/Heading3.svelte'
  import Heading2 from '$lib/components/Heading2.svelte'
  import { PrismicImage, PrismicRichText, PrismicText } from '@prismicio/svelte'

  export let slice: Content.NewsItemSlice
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  <div class="container">
    {#each slice.primary.news_items as item}
      <div class="card">
        <div class="card-content px-12">
          <h3>
            <PrismicRichText
              field={item.title}
              components={{ heading2: Heading2, heading3: Heading3 }}
            />
          </h3>
          <p class="prose prose-invert prose-xl mt-8 mb-12"><PrismicText field={item.details} /></p>
        </div>
        <div>
          <PrismicImage field={item.image} />
        </div>
      </div>
    {/each}
  </div>
</Bounded>

<style>
  .container {
    width: 90%;
    margin: 20px auto;
    padding: 20px;
    @apply bg-secondary-500/30;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
  }

  p {
    line-height: 1.6;
  }

  .card {
    @apply bg-primary-500/30;
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
  }

  .card h3 {
    margin-top: 0;
    @apply text-primary-100;
  }
</style>
