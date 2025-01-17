<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<h2 class="text-balance text-center text-3xl font-medium md:text-5xl max-w-3xl">
  {@render children?.()}
</h2>
