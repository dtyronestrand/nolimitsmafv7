import { writable, type Writable } from 'svelte/store'
import { pb } from './pocketbase'
import type { BaseModel } from 'pocketbase'
import { browser } from '$app/environment'

// Create a more persistent store
function createPersistentStore() {
  const store: Writable<BaseModel | null> = writable(pb.authStore.model)

  if (browser) {
    // Initialize from PocketBase auth store
    pb.authStore.onChange((token, model) => {
      console.log('Auth state changed:', { token: !!token, model: !!model }) // Debug log
      store.set(model)
    })
  }

  return {
    subscribe: store.subscribe,
    set: store.set,
    update: store.update,
  }
}

export const currentUser = createPersistentStore()
