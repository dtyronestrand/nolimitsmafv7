<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<h1
  class="text-balance text-primary-400 text-center text-5xl font-medium max-w-3xl mx-auto md:text-7xl"
>
  {@render children?.()}
</h1>
