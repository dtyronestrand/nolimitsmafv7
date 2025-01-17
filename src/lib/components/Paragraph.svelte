<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<p class="w-full -mx-14 text-2xl md:text-4x">
  {@render children?.()}
</p>
