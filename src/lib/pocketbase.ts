import PocketBase from 'pocketbase'
import { PUBLIC_POCKETBASE_URL } from '$env/static/public'
import { writable } from 'svelte/store'

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL)

export const currentUser = writable(pb.authStore.model)

pb.authStore.onChange(() => {
  console.log('AuthStore changed:', {
    isValid: pb.authStore.isValid,
    token: !!pb.authStore.token,
    model: !!pb.authStore.model,
  })
})
