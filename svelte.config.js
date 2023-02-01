import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import rehypeExternalLinks from 'rehype-external-links'
import { mdsvex } from 'mdsvex'
import shiki from 'shiki'
import forestCottage from './forest-cottage.js'
import getHeadings from './getHeadings.js'
import updateVFilePaths from './updateVFilePaths.js' // for code import
import { codeImport } from 'remark-code-import'
import { resolve } from 'path'
import blockquoteClasses from './blockquoteClasses.js'
const highlighter = await shiki.getHighlighter({
  theme: forestCottage
})
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.svx', '.md'],
      // layout: {
      //   _: "./src/lib/Layout.svelte",
      // },
      highlight: {
        highlighter: (code, lang) => {
          const html = highlighter.codeToHtml(code, {
            lang
          })
          if (lang == 'html') {
            return `{@html \`${html}\`}`
          }
          return `{@html \`${html}\`}`
        }
      },
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: 'noreferrer' }]
      ],
      remarkPlugins: [
        getHeadings,
        updateVFilePaths,
        blockquoteClasses,
        [codeImport, { rootDir: resolve('./static') }]
      ]
    })
  ],

  kit: {
    adapter: adapter(),
    prerender: {
      handleMissingId: 'warn'
    }
  },
  extensions: ['.svelte', '.md']
}

export default config
