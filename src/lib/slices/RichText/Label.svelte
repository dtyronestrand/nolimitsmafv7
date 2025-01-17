<script lang="ts">
  import type { RTLabelNode } from '@prismicio/client'

  interface Props {
    node: RTLabelNode;
    children?: import('svelte').Snippet;
  }

  let { node, children }: Props = $props();
</script>

{#if node.data.label === 'codespan'}
  <code>{@render children?.()}</code>
{:else}
  <span class={node.data.label}>{@render children?.()}</span>
{/if}
