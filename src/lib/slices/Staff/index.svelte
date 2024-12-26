<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';
	import GoldText from '$lib/components/GoldText.svelte';
	import {PrismicRichText, PrismicText, PrismicImage} from '@prismicio/svelte';
	export let slice: Content.StaffSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="gradient-heading">
		<PrismicRichText field={slice.primary.heading} components={{heading2:Heading2, em:GoldText}}/>
	</div>
<div class="flex flex-col md:flex-row mt-10 relative justfy-between ">
  {#each slice.primary.staff_info as {avatar, name, title}, i}
<div class="card variant-ghost-primary card-hover mt-8 md:mt-0 md:mr-8">
        <div class="card-header">
         <PrismicImage class="mb-8 " field={avatar}/>
        </div>
        <div class=" prose text-4xl py-4 text-primary-200 prose-invert  text-center m-0">
          <PrismicRichText field={name} />
        </div>
          <div class="card-footer mt-4 prose prose-invert text-2xl text-amber-400">
            {title}
          </div>

</div>
    {/each}
</div>
  </Bounded>
  <style>
.gradient-heading {
  @apply bg-clip-text text-transparent box-decoration-clone;
  @apply bg-gradient-to-t;
  @apply from-surface-500 via-secondary-500 to-primary-500;
}
  </style>