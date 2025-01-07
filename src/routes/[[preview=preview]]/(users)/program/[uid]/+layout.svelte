<script lang="ts">
    import type {PageData} from './$types'
    import {currentUser} from '$lib/pocketbase'
    import {asLink} from '@prismicio/client'
    import {page} from '$app/stores'
   import '/src/app.css'
    export let data: PageData

    const {programMenus} = data
    const navigationItems = programMenus[0].data.navigation;

</script>
{#if $currentUser !== null }
<div class="flex min-h-100vh">
    <aside class="sidebar">
        <div class="logo-container">
            <h2>NLMAF</h2>
          
            <nav>
          
            <h3>{$currentUser?.firstName} {$currentUser?.lastName}</h3>
            <a href='/profile'>Profile</a>
            <ul>
                {#each navigationItems as {navigation_label, navigation_link}}
                <li class="nav-item" class:active={$page.url.pathname === asLink(navigation_link)}>
                    <a href={asLink(navigation_link)}><span class="title">{navigation_label}</span></a>
                </li>
                {/each}
            </ul>
        
        </nav>
      </div>
    </aside>
    <main class="main-content">
        <slot />
    </main>
  </div>
            {:else}
            <main class="main-content">
                <slot />
            </main>
            {/if}
         
        

           

 


<style>

.sidebar {
        width: 250px;
        @apply bg-surface-500 text-surface-50 rounded-tr-3xl rounded-br-3xl;

        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    .logo-container {
        padding: 1rem 0;
        border-bottom: 1px solid;
        @apply border-primary-500;
    
        margin-bottom: 1rem;
    }

    .nav-item {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem;
        color: #fff;
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
        @apply bg-inherit
    }
</style>