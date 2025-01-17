<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<p class="prose text-primary-100 text-md px-4 pt-6 md:text-lg">{@render children?.()}</p>

<style>
  p {
    font-family: sans-serif;
  }
</style>
