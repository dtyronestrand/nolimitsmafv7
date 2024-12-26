<script lang="ts">
  import type { Content } from "@prismicio/client";
  import Bounded from '$lib/components/Bounded.svelte'
import GoldText from '$lib/components/GoldText.svelte'
  import {PrismicRichText, PrismicImage} from '@prismicio/svelte'
  export let slice: Content.StaffSlice;
</script>

<Bounded
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <PrismicRichText field={slice.primary.heading} components={{em:GoldText}}/>
  {#each slice.primary.staff_info as {avatar, name, title}}
<div class="card ">
<div class="card-header">

  <PrismicImage field={avatar}/>s
</div>
<div>
  <PrismicRichText field={name}/>
</div>
<div class="card-footer">
  {title}
</div> 
</div>
{/each}
</Bounded>
