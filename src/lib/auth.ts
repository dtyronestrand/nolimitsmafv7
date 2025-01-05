import PocketBase from 'pocketbase'
import { writable } from 'svelte/store'
import { pb } from './pocketbase' // Add this import

// Use the built-in types from PocketBase instance
type AuthModel = import('pocketbase').BaseModel

export const currentUser = writable<AuthModel | null>(pb.authStore.model)

// Subscribe to auth state changes
pb.authStore.onChange((auth) => {
  console.log("Auth state changed:", auth);
  currentUser.set(pb.authStore.model);
});
