<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<em class="bg-gradient-to-b from-yellow-200 to-yellow-500 bg-clip-text not-italic text-transparent">
  {@render children?.()}
</em>
