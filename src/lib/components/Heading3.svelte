<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<h3 class="text-balance text-center text-xl font-medium md:text-5xl max-w-3xl">
  {@render children?.()}
</h3>
