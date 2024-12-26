<script lang="ts">
  import type { Content } from "@prismicio/client";
  import Bounded from "$lib/components/Bounded.svelte";
    import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/svelte";
    import GoldText from '$lib/components/GoldText.svelte';
   import {onMount} from 'svelte'; 
    import gsap from 'gsap';  
    export let slice: Content.ShowCaseSlice;
    onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

		if (prefersReducedMotion) return;

		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'.showcase__heading',
			{
				y: 100
			},
			{
				y: 0,
				ease: 'power2.inOut',
				duration: 1,
				scrollTrigger: {
					trigger: '.showcase__heading',
					start: 'top bottom-=40%',
					toggleActions: 'play pause resume reverse'
				}
			}
		);

		gsap.fromTo(
			'.showcase__glow',
			{
				scale: 0.7,
				opacity: 0.1
			},
			{
				scale: 1,
				opacity: 0.35,
				ease: 'power2.inOut',
				duration: 1,
				scrollTrigger: {
					trigger: '.showcase__heading',
					start: 'top bottom-=40%',
					toggleActions: 'play pause resume reverse'
				}
			}
		);
	});

</script>
<Bounded class="relative" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  <div class="showcase__glow absolute -z-10 w-full max-w-2xl aspect-video rounded-full bg-yellow-400/40 mix-blend-screen blur-[120px] filter"/>
	<h2 class="showcase__heading text-balance text-center text-5xl font-medium md:text-7xl">
<h1><PrismicRichText field={slice.primary.heading} components={{em:GoldText}}/></h1>
{#each slice.primary.show_piece as {title, body,image, link}, i}
<div class="showcase__glow absolute -z-10 w-full max-w-2xl aspect-video rounded-full bg-gradient-to-t from-red-600/50 to-yellow-400/50 via-orange-500/50 mix-blend-screen blur-[120px] filter"/>
	<div class="relative mt-16 grid items-center gap-8 rounded-xl border border-secondary-600/80 bg-gradient-to-b from-tertiary-50/15 to-tertiary-50/5 px-8 py-8 backdropblur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
		<div class="grid-background"/>
<div class="paper">
  <img src={image.url} class="poster"/>
<PrismicRichText field={title} components={{em:GoldText}}/>

 <hr/>
 <div class="prose prose-lg prose-invert">
 <PrismicText  field={body} />
 </div>
<PrismicLink field={link} class="btn a">Read More</PrismicLink>
  <div class="space"></div>
  </div>
</div>
  
{/each}
</Bounded>
<style>

* {
  user-select: none;
  transition: .3s ease;
  -webkit-font-smoothing: antialiased;
}





img {
  max-width: 100%;
  max-height: 100%;
}

.poster {
  border-radius: 4px 4px 0 0;
  margin-bottom: 2vh;
}

h1 {
  font-size: 2.6rem;
  color: #303336;
  letter-spacing: 1px;
  margin: 2vh 4vw;
 
}

h2 {
  font-size: .4rem;
  color: #A0A6AB;
  letter-spacing: 2px;
  text-transform: uppercase;
 
  font-weight: 700;
  margin-bottom: 10px;
}

hr {
  width: 20%;
  margin-top: 3vh;
  margin-bottom: 3vh;
  border: 0;
  border-bottom: 1px solid #E6E9EC;
}

p {
  margin: 2vh 8vw;
  text-align: center;
  padding-bottom: 1vh;
  color: #A0A6AB;

  font-weight: 400;
  font-size: .9rem;
  line-height: 1.25rem;
}

.btn,
a.btn {
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  line-height: 20px;
  border-radius: 4px;
  padding: 1vh 2vh;
  letter-spacing: .02rem;
background: #664EF7;
  color:white;
 
  font-size:.8rem;
  box-shadow:0 0px 0px black
0 0px 0px rgba(0, 0, 0, 0);
}

.btn,
a.btn:hover {
  background: #7C66FF;
  box-shadow:0 7px 14px black
0 3px 6px rgba(0, 0, 0, .08);
  transform: translateY(-1px);
}

.btn,
a.btn:active {
  box-shadow:0 4px 6px black,
  0 1px 3px rgba(0, 0, 0, .12);
  transform: translateY(1px);
}

.space{
  height:4vh;
}
</style>