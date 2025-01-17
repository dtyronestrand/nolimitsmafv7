<script lang="ts">
  import type { Content } from '@prismicio/client'

  interface Props {
    slice: Content.WatchVideoSlice;
  }

  let { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  Placeholder component for {slice.slice_type} (variation: {slice.variation}) Slices
</section>
