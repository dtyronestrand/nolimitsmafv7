import { sveltekit } from '@sveltejs/kit/vite'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: 'svelte',
      autoInstall: true,
    }),
  ],
  ssr: {
    noExternal:[
      'gsap',
      '@gsap/shockiingly',
    ],
  },
  server: {
    fs: {
      // Allow access to files from the project root.
      allow: ['..'],
    },
  },
})
