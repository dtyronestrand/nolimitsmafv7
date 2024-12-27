<script lang="ts">
  import type { Content } from '@prismicio/client'
  import Bounded from '$lib/components/Bounded.svelte'
  import { PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte'
  import GoldText from '$lib/components/GoldText.svelte'
  import Heading3 from '$lib/components/Heading3.svelte'
  import EffectParagraph from './EffectParagraph.svelte'
  import { onMount } from 'svelte'
  import gsap from 'gsap'
  export let slice: Content.ShowCaseSlice
  onMount(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches

    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      '.showcase__heading',
      {
        y: 100,
      },
      {
        y: 0,
        ease: 'power2.inOut',
        duration: 1,
        scrollTrigger: {
          trigger: '.showcase__heading',
          start: 'top bottom-=40%',
          toggleActions: 'play pause resume reverse',
        },
      },
    )

    gsap.fromTo(
      '.showcase__glow',
      {
        scale: 0.7,
        opacity: 0.1,
      },
      {
        scale: 1,
        opacity: 0.35,
        ease: 'power2.inOut',
        duration: 1,
        scrollTrigger: {
          trigger: '.showcase__heading',
          start: 'top bottom-=40%',
          toggleActions: 'play pause resume reverse',
        },
      },
    )
  })
</script>

<Bounded class="relative" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  <div
    class="showcase__glow absolute -z-10 w-full max-w-2xl aspect-video rounded-full bg-yellow-400/40 mix-blend-screen blur-[120px] filter"
  />
  <h2 class="showcase__heading text-balance text-center text-5xl font-medium md:text-7xl">
    <h1><PrismicRichText field={slice.primary.heading} components={{ em: GoldText }} /></h1>
    <div class="flex flex-col md:flex-row mt-8">
      {#each slice.primary.show_piece as { title, body, image, link }, i}
        <div class="effect container mr-6 bg-secondary-500/10">
          <img src={image.url} alt="" />
          <div class="pt-8">
            <PrismicRichText field={title} components={{ em: GoldText, heading2: Heading3 }} />
          </div>
          <div class="caption">
            <div class="info">
              <PrismicRichText field={body} components={{ paragraph: EffectParagraph }} />
            </div>
          </div>
        </div>
      {/each}
    </div>
  </h2>
</Bounded>

<style>
  .container {
    width: 48%;
    min-height: 450px;
    min-width: 450px;
    max-width: 650px;
    box-shadow: 0 0 0px 4px rgba(18, 18, 18, 0.47);
  }

  .container:hover {
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.47);
  }

  .effect {
    overflow: hidden;
    perspective: 40em;
    position: relative;
  }

  .effect .caption {
    content: '';
    display: block;
    background-color: #262626;
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;

    outline: 2px solid;
    @apply outline-secondary-500;
    outline-offset: -15px;

    transform: rotateX(-90deg);
    transform-origin: 50% 50%;
    opacity: 0;
    transition:
      transform 0.8s ease-in-out,
      opacity 0.8s;
  }

  .effect:hover .caption {
    transform: rotateX(0);
    opacity: 0.7;
  }

  /* Text */
  .effect .caption h2,
  .effect .caption p {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    @apply bg-surface-900/50;
    text-align: center;
    opacity: 0;
    z-index: 9;
    transition:
      all 0.4s 0.2s,
      opacity 0.4s 0.2s;
  }

  .effect .caption h2 {
    top: 10%;
    width: 400px;
  }

  .effect .caption p {
    top: 90%;
    width: 300px;
  }

  .effect:hover .caption h2 {
    top: 28%;
    opacity: 1;
  }

  .effect:hover .caption p {
    top: 58%;
    opacity: 1;
  }
</style>
