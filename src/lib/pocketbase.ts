import PocketBase from 'pocketbase'
import { PUBLIC_POCKETBASE_URL } from '$env/static/public'
import { writable } from 'svelte/store'




import { browser } from '$app/environment';

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL)

if (browser) {
    // Load auth from cookie if in browser
    const cookie = document.cookie;
    if (cookie) {
        pb.authStore.loadFromCookie(cookie);
    }
}
export const currentUser = writable(pb.authStore.model)

pb.authStore.onChange((auth) => {
    currentUser.set(pb.authStore.model)
})
