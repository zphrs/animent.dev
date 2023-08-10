<script lang="ts">
  import { EditorView, minimalSetup } from 'codemirror'
  import {
    keymap,
    lineNumbers,
    highlightActiveLineGutter,
    rectangularSelection,
    crosshairCursor,
    ViewUpdate
  } from '@codemirror/view'
  import { foldGutter } from '@codemirror/language'
  import { onDestroy } from 'svelte'
  import { indentMore, indentLess } from '@codemirror/commands'
  let CodeMirrorEditor: HTMLElement | null = null
  import { classyTheme } from './CodeMirror'
  import Arrow from './Arrow.svelte'
  export let doc = ''
  import {
    expandAbbreviation,
    abbreviationTracker
  } from '@emmetio/codemirror6-plugin'
  export let lang = 'txt'
  export let focused = false
  let editor: EditorView | undefined

  async function getLanguageExtension(lang: string) {
    if (lang == 'txt') {
      return undefined
    } else if (lang == 'js') {
      const { javascript } = await import(
        '@codemirror/lang-javascript'
      )
      return javascript()
    } else if (lang == 'html' || lang == 'svg') {
      const { html } = await import('@codemirror/lang-html')
      return html()
    } else if (lang == 'css') {
      const { css } = await import('@codemirror/lang-css')
      return css()
    } else if ((lang = 'svelte')) {
      const { svelte } = await import(
        '@replit/codemirror-lang-svelte'
      )
      return svelte()
    }
  }

  async function setupView(CodeMirrorEditor: HTMLElement) {
    console.log('CodeMirrorEditor')
    let extensionArr = [
      keymap.of([
        {
          key: 'Tab',
          run: expandAbbreviation
        }
      ]),
      minimalSetup,
      lineNumbers(),
      highlightActiveLineGutter(),
      foldGutter({
        markerDOM: (o: boolean) => {
          const from = o ? 'right' : 'down'
          const to = o ? 'down' : 'right'
          let parent = document.createElement('div')
          parent.style.width = '1rem'
          parent.style.height = '1rem'
          let _arrow = new Arrow({
            props: { from, to },
            target: parent
          })
          return parent // TODO: use arrow svg instead
        }
      }),
      abbreviationTracker(),
      rectangularSelection(),
      crosshairCursor(),
      classyTheme,
      keymap.of([
        {
          key: 'Tab',
          run: indentMore
        },
        {
          key: 'Shift-Tab',
          run: indentLess
        },
        {
          key: 'Ctrl-]',
          run: indentMore
        },
        {
          key: 'Ctrl-[',
          run: indentLess
        }
      ]),
      EditorView.updateListener.of((update: ViewUpdate) => {
        if (update.docChanged) {
          doc = update.state.doc.toString()
        }
      }),
      EditorView.lineWrapping
    ]
    const langExt = await getLanguageExtension(lang)
    if (langExt) {
      extensionArr.push(langExt)
    }
    editor = new EditorView({
      extensions: extensionArr,
      parent: CodeMirrorEditor,
      doc
    })
    return editor
  }
  $: {
    if (CodeMirrorEditor && !editor) {
      setupView(CodeMirrorEditor)
    }
  }

  onDestroy(() => {
    // remove editor from dom
    if (editor) {
      editor.destroy()
    }
  })
</script>

<div
  class="cme"
  bind:this={CodeMirrorEditor}
  on:focusin={() => (focused = true)}
  on:focusout={() => (focused = false)} />

<style>
  .cme {
    max-height: calc(100vh - 5.5rem);
    min-height: 5rem;
    overflow: auto;
    background: #040421;
  }
</style>
