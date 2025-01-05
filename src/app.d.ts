// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import 'unplugin-icons/types/svelte'
import type { Record, Admin } from 'pocketbase'
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      pb: import('pocketbase').default
      user: import('pocketbase').BaseModel | null
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {}
