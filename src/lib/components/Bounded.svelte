<!-- src/lib/components/Bounded.svelte -->

<script>
  import clsx from 'clsx'

  export let tag = 'section'

  /** @type {string | undefined} */
  let className = undefined
  export { className as class }
</script>

<svelte:element
  this={tag}
  {...$$restProps}
  class={clsx('px-4 py-8 first:pt-10 md:px-6 md:py-10 lg:py-12', className)}
>
  <div class="mx-auto flex w-full max-w-6xl flex-col items-center">
    <slot />
  </div>
</svelte:element>
