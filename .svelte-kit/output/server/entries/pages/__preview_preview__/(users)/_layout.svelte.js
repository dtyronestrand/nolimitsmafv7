import { c as create_ssr_component, d as subscribe, g as escape, f as each, a as add_attribute } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { c as currentUser } from "../../../../chunks/pocketbase.js";
const css = {
  code: ".dashboard-container.svelte-myo5pa{display:flex;min-height:100vh}.sidebar.svelte-myo5pa{width:250px;background-color:rgb(var(--color-surface-400) / 0.1);--tw-text-opacity:1;color:rgb(var(--color-primary-100) / var(--tw-text-opacity, 1));padding:1rem;display:flex;flex-direction:column}.logo-container.svelte-myo5pa{padding:1rem 0;border-bottom:1px solid #333;margin-bottom:1rem}.nav-item.svelte-myo5pa{display:flex;align-items:center;padding:0.75rem 1rem;--tw-text-opacity:1;color:rgb(var(--color-primary-100) / var(--tw-text-opacity, 1));text-decoration:none;border-radius:0.5rem;margin-bottom:0.5rem;transition:background-color 0.2s}.nav-item.svelte-myo5pa:hover{--tw-bg-opacity:1;background-color:rgb(var(--color-secondary-500) / var(--tw-bg-opacity, 1))}.nav-item.active.svelte-myo5pa{--tw-bg-opacity:1;background-color:rgb(var(--color-secondary-500) / var(--tw-bg-opacity, 1))}.icon.svelte-myo5pa{margin-right:0.75rem}.main-content.svelte-myo5pa{flex:1;padding:2rem;--tw-bg-opacity:1;background-color:rgb(var(--color-surface-900) / var(--tw-bg-opacity, 1));background-image:url('/noise-texture.svg')}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n  import { page } from '$app/stores'\\n  import { currentUser } from '$lib/pocketbase'\\n  import { onMount } from 'svelte'\\n  import { pb } from '$lib/pocketbase'\\n  const menuItems = [\\n    { title: 'Programs', href: '/programs', icon: '📊' },\\n    { title: 'Videos', href: '/videoindex', icon: '⚙️' },\\n  ]\\n\\n  // Make sure to add your logout function\\n  const logout = async () => {\\n currentUser.pb.authStore.clear()\\n    await pb.authStore.clear()\\n    goto('/')\\n  }\\n  onMount(() => {\\n    // Update the store with the initial auth state\\n    currentUser.set(pb.authStore.model)\\n  })\\n  console.log($currentUser?.role)\\n<\/script>\\n\\n<div class=\\"dashboard-container\\">\\n  <aside class=\\"sidebar\\">\\n    <div class=\\"logo-container\\">\\n      <h2>Current Student Menu</h2>\\n      <h3>{$currentUser?.name}</h3>\\n      <a href=\\"/profile\\" class=\\"nav-item\\">Profile</a>\\n      <a href=\\"/logout\\" on:click={logout} class=\\"nav-item\\">Logout</a>\\n    </div>\\n\\n    <nav>\\n      {#each menuItems as item}\\n        <a href={item.href} class=\\"nav-item\\" class:active={$page.url.pathname === item.href}>\\n          <span class=\\"icon\\">{item.icon}</span>\\n          <span class=\\"title\\">{item.title}</span>\\n        </a>\\n      {/each}\\n    </nav>\\n  </aside>\\n\\n  <main class=\\"main-content\\">\\n    <slot />\\n  </main>\\n</div>\\n\\n<style>\\n  .dashboard-container {\\n    display: flex;\\n    min-height: 100vh;\\n  }\\n\\n  .sidebar {\\n    width: 250px;\\n    background-color: rgb(var(--color-surface-400) / 0.1);\\n    --tw-text-opacity: 1;\\n    color: rgb(var(--color-primary-100) / var(--tw-text-opacity, 1));\\n    padding: 1rem;\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\\n  .logo-container {\\n    padding: 1rem 0;\\n    border-bottom: 1px solid #333;\\n    margin-bottom: 1rem;\\n  }\\n\\n  .nav-item {\\n    display: flex;\\n    align-items: center;\\n    padding: 0.75rem 1rem;\\n    --tw-text-opacity: 1;\\n    color: rgb(var(--color-primary-100) / var(--tw-text-opacity, 1));\\n    text-decoration: none;\\n    border-radius: 0.5rem;\\n    margin-bottom: 0.5rem;\\n    transition: background-color 0.2s;\\n  }\\n\\n  .nav-item:hover {\\n    --tw-bg-opacity: 1;\\n    background-color: rgb(var(--color-secondary-500) / var(--tw-bg-opacity, 1));\\n}\\n\\n  .nav-item.active {\\n    --tw-bg-opacity: 1;\\n    background-color: rgb(var(--color-secondary-500) / var(--tw-bg-opacity, 1));\\n}\\n\\n  .icon {\\n    margin-right: 0.75rem;\\n  }\\n\\n  .main-content {\\n    flex: 1;\\n    padding: 2rem;\\n    --tw-bg-opacity: 1;\\n    background-color: rgb(var(--color-surface-900) / var(--tw-bg-opacity, 1));\\n    background-image: url('/noise-texture.svg');\\n  }\\n</style>\\n"],"names":[],"mappings":"AAgDE,kCAAqB,CACnB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KACd,CAEA,sBAAS,CACP,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,IAAI,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACrD,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,IAAI,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CAChE,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAClB,CAEA,6BAAgB,CACd,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC7B,aAAa,CAAE,IACjB,CAEA,uBAAU,CACR,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,OAAO,CAAC,IAAI,CACrB,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,IAAI,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CAChE,eAAe,CAAE,IAAI,CACrB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,gBAAgB,CAAC,IAC/B,CAEA,uBAAS,MAAO,CACd,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,IAAI,qBAAqB,CAAC,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAC9E,CAEE,SAAS,qBAAQ,CACf,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,IAAI,qBAAqB,CAAC,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAC9E,CAEE,mBAAM,CACJ,YAAY,CAAE,OAChB,CAEA,2BAAc,CACZ,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CACzE,gBAAgB,CAAE,yBACpB"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const menuItems = [
    {
      title: "Programs",
      href: "/programs",
      icon: "📊"
    },
    {
      title: "Videos",
      href: "/videoindex",
      icon: "⚙️"
    }
  ];
  console.log($currentUser?.role);
  $$result.css.add(css);
  $$unsubscribe_currentUser();
  $$unsubscribe_page();
  return `<div class="dashboard-container svelte-myo5pa"><aside class="sidebar svelte-myo5pa"><div class="logo-container svelte-myo5pa"><h2 data-svelte-h="svelte-1vj9iez">Current Student Menu</h2> <h3>${escape($currentUser?.name)}</h3> <a href="/profile" class="nav-item svelte-myo5pa" data-svelte-h="svelte-12hr44f">Profile</a> <a href="/logout" class="nav-item svelte-myo5pa" data-svelte-h="svelte-1wd9gcb">Logout</a></div> <nav>${each(menuItems, (item) => {
    return `<a${add_attribute("href", item.href, 0)} class="${["nav-item svelte-myo5pa", $page.url.pathname === item.href ? "active" : ""].join(" ").trim()}"><span class="icon svelte-myo5pa">${escape(item.icon)}</span> <span class="title">${escape(item.title)}</span> </a>`;
  })}</nav></aside> <main class="main-content svelte-myo5pa">${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
