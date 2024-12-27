<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { page } from '$app/stores';
	import { PrismicLink } from '@prismicio/svelte';
	import IconMenu from '~icons/ph/list-bold';
	import IconClose from '~icons/ph/x-bold';
	import { asLink } from '@prismicio/client';
	import clsx from 'clsx';
    import {pb} from '$lib/pocketbase';
    import {currentUser} from '$lib/pocketbase';
	export let settings: Content.SettingsDocument;
    import {applyAction, enhance} from '$app/forms'
	let isOpen = false;
	const toggleOpen = () => {
		isOpen = !isOpen;
	};
	const close = () => {
		isOpen = false;
	};
	/**@param {import('@prismicio/client').LinkField} link */
	const isActive = (link)=> {
		const path = asLink(link);
		console.log(path);
		if (!path) return false;
		if (path === '/') {
			return $page.url.pathname === '/';
		}
		return $page.url.pathname.startsWith(path);
	};
</script>

<header class="p-4 md:p-6">
	<nav
		class="md: md: mx-auto flex max-w-6xl flex-col justify-between py-2 text-2xl font-medium md:flex-row md:items-center"
		aria-label="Main"
	>
		<div class="flex items-center justify-between">
			<a href="/" on:click={close} class="z-50">
				<span class="sr-only">home page</span>
			</a>
			<button
				type="button"
				class="block p-2 text-3xl md:hidden"
				aria-expanded={isOpen}
				on:click={toggleOpen}
			>
				<IconMenu />
			</button>
		</div>
		<!--Mobile -->
		<div
			class={clsx(
				'fixed inset-0 z-40 flex flex-col items-end bg-surface-900 pr-4 pt-6 transition-transform duration-300 ease-in-out md:hidden',
				isOpen ? 'translate-x-0' : 'translate-x-[100%]'
			)}
		>
			<button
				aria-expanded={isOpen}
				type="button"
				class="block p-2 text-3xl text-surface-50 md:hidden"
				on:click={toggleOpen}
			>
				<IconClose />
			</button>
			<ul class="grid justify-items-end gap-8">
				{#each settings.data.navigation as {navigation_label,
                navigation_link}}
					<li>
						<a
							on:click={close}
							aria-current={isActive(navigation_link) ? 'page' : undefined}
							href={asLink(navigation_link)}
							class="group relative block overflow-hidden rounded px-3 py-1 text-3xl font-bold text-primary-100 first:mt-8"
						>
							<span
								class={`absolute inset-0 z-0 h-full rounded bg-secondary-600 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive(navigation_link) ? 'translate-y-[calc(100%-4px)]' : 'translate-y-[100%]'}`}
							/>
							<span class="relative">{navigation_label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<!--Desktop -->
		<ul class="hidden gap-6 md:flex">
			{#each settings.data.navigation as {navigation_link, navigation_label}}
				<li>
					<a data-sveltekit-reload
						aria-current={isActive(navigation_link) ? 'page' : undefined}
						href={asLink(navigation_link)}
						on:click={close}
						class="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-primary-100"
					>
						<span
							class={`absolute inset-0 z-0 h-full rounded bg-secondary-600 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive(navigation_link) ? 'translate-y-[calc(100%-4px)]' : 'translate-y-[100%]'}`}
						/>
						<span class="relative">{navigation_label}</span>
					</a>
				</li>
			{/each}
            {#if $currentUser}
               <li><a href='/profile'>{$currentUser.firstName} {$currentUser.lastName}</a></li>
               <li>
                <form method="POST" action="/logout" use:enhance={()=>{
                    return async ({result})=>{
                        applyAction(result);
                        pb.authStore.clear();
                    }
                }}>
                    <button class="btn btn-sm variant-ghost-primary">Logout</button></form>
                </li>
                {:else}
                <li>
                 <a href="/register">
                        <button class="btn btn-sm variant-ghost-primary">Login</button></a>
                </li>
            {/if}
		</ul>
	</nav>
</header>
