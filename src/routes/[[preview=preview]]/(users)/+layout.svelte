<script>
  import { page } from '$app/stores'
  import { currentUser } from '$lib/auth'
  import { onMount } from 'svelte'
  import { pb } from '$lib/pocketbase'
  import { goto } from '$app/navigation'
  import { PrismicLink } from '@prismicio/svelte'

  // Make sure to add your logout function
  const logout = async () => {
    await pb.authStore.clear()
    goto('/')
  }
  onMount(() => {
    // Update the store with the initial auth state
    currentUser.set(pb.authStore.model)
  })
  console.log($currentUser?.role)

  export let data
</script>

<div class="dashboard-container">
  {#if $currentUser}
    <aside class="sidebar">
      <div class="logo-container">
        <h2 class="font-sans text-center text-xl mb-8">Member Menu</h2>
        <h3 class="text-center">{$currentUser?.name}</h3>
        <img
          src={$currentUser.avatar
            ? `https://birds-curve.pockethost.io/api/files/users/${$currentUser.id}/${$currentUser.avatar}`
            : '/generic-avatar.png'}
          alt={$currentUser?.name}
          class="w-16 h-16 rounded-full mx-auto my-6"
        />
        <a href="/profile" class="nav-item text-center">
          <span class="text-center mx-auto">Profile</span>
        </a>
      </div>

      <nav>
        {#each data.menu.data.menu as { link, label, submenu }}
          <PrismicLink field={link} class="nav-item">
            <span class="nav-item">{label}</span>
          </PrismicLink>
          <ul class="ml-8 flex justify-between flex-col">
            {#each submenu as link (link.key)}
              <li class="p-2 hover:bg-secondary-500 rounded-lg">
                <PrismicLink field={link} class="nav-item" />
              </li>
            {/each}
          </ul>
        {/each}
      </nav>
    </aside>
  {/if}

  <main class="main-content">
    <slot />
  </main>
</div>

<style>
 

  .dashboard-container {
    display: flex;
    min-height: 100vh;
  }

  .sidebar {
    width: 250px;
    @apply bg-gradient-to-b from-surface-300/30 via-surface-500/35 to-surface-800/40 rounded-tr-3xl border-2 border-secondary-500 backdrop-blur-xl filter shadow-md shadow-white text-primary-100;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  .logo-container {
    padding: 1rem 0;
    border-bottom: 1px solid #333;
    margin-bottom: 1rem;
  }

  .nav-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    @apply text-primary-100;
    text-decoration: none;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    transition: background-color 0.2s;
  }
  
  .nav-item:hover {
    
    @apply bg-secondary-500;
  }

  .nav-item.active {

    @apply bg-secondary-500;
  }



  .main-content {
    flex: 1;
    padding: 2rem;
    @apply bg-surface-900;
    background-image: url('/noise-texture.svg');
  }
</style>
