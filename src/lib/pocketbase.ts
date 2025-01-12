import PocketBase from 'pocketbase'
import { PUBLIC_POCKETBASE_URL } from '$env/static/public'
import { writable } from 'svelte/store'

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL)

export const currentUser = writable(pb.authStore.model)
pb.autoCancellation(false) // optional
pb.authStore.onChange(() => {
  console.log('Auth state changed:', pb.authStore.model)
  currentUser.set(pb.authStore.model)
})
