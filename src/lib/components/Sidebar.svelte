<script>
  import { page } from '$app/stores'
  import clsx from 'clsx'
  import { asLink } from '@prismicio/client'
  let isExpanded = true
  const toggleSidebar = () => {
    isExpanded = !isExpanded
  }
</script>

<div
  class="w-[60px] h-full bg-primary-500 p-[20px] box-border text-primary-900 overflow-hidden rounded-[1rem 0 0 1rem] transition-[width .75s ease] hover:w-[200px]"
>
  <div class="w-100%">
    <ul class="list-none p-0 m-0 flex flex-col gap-y-[1rem]">
      {#each $page.data.tkdcsnav.data.nav as { link, label }}
        <li
          class="p-[10px 10px] border-b-2 border-b-secondary-500 rounded-lg cursor-pointer transition-colors duration-[0.3s] ease hover:bg-secondary-500"
        >
          <a href={asLink(link)} class="inline-flex gap-x-[1rem] color-inherit decoration-none">
            <span class="pl-[.5rem]">{label}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
