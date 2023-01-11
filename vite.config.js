import { sveltekit } from '@sveltejs/kit/vite'
import copy from 'rollup-plugin-copy'
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  rollupConfig: {
    client: {
      plugins: [
        copy({
          targets: [
            {
              src: [
                'src/routes/animate/*',
                '!**/*.svelte',
                '!**/*.md'
              ],
              dest: 'static'
            }
          ]
        })
      ]
    }
  }
}

export default config
