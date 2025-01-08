<script>
  import { page } from '$app/stores'
  import { currentUser } from '$lib/auth'
  import { onMount } from 'svelte'
  import { pb } from '$lib/pocketbase'
  import { goto } from '$app/navigation'
  const menuItems = [
    { title: 'Programs', href: '/programs', icon: '📊' },
    { title: 'Videos', href: '/videoindex', icon: '⚙️' },
  ]

  // Make sure to add your logout function
  const logout = async () => {
 currentUser.pb.authStore.clear()
    await pb.authStore.clear()
    goto('/')
  }
  onMount(() => {
    // Update the store with the initial auth state
    currentUser.set(pb.authStore.model)
  })
  console.log($currentUser?.role)
</script>
<div class="dashboard-container">
  {#if $currentUser}
  <aside class="sidebar">
    <div class="logo-container">
      <h2>Current Student Menu</h2>
      <h3>{$currentUser?.name}</h3>
      <a href="/profile" class="nav-item">Profile</a>
      <a href="/logout" on:click={logout} class="nav-item">Logout</a>
    </div>

    <nav>
      {#each menuItems as item}
        <a href={item.href} class="nav-item" class:active={$page.url.pathname === item.href}>
          <span class="icon">{item.icon}</span>
          <span class="title">{item.title}</span>
        </a>
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
    @apply bg-surface-400/10 text-primary-100;
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

  .icon {
    margin-right: 0.75rem;
  }

  .main-content {
    flex: 1;
    padding: 2rem;
    @apply bg-surface-900;
    background-image: url('/noise-texture.svg');
  }
</style>