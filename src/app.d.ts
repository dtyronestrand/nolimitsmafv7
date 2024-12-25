// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import 'unplugin-icons/types/svelte'
declare global {
  namespace App {
    // interface Error {}
     interface Locals {
      pb: import ('pocketbase').default;
      user: import ('pocketbase').default['authStore']['model'];
     }
    // interface PageData {}
    // interface Platform {}
  }
}

export {}
