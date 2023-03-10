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
  import { javascript } from '@codemirror/lang-javascript'
  import { foldGutter } from '@codemirror/language'
  import { html } from '@codemirror/lang-html'
  import { css } from '@codemirror/lang-css'
  import { onDestroy } from 'svelte'
  import {
    indentWithTab,
    indentMore,
    indentLess
  } from '@codemirror/commands'
  let CodeMirrorEditor: HTMLElement | null = null
  import { classyTheme } from './CodeMirror'
  import Arrow from './Arrow.svelte'
  import type { Extension } from '@codemirror/state'
  export let doc = ''
  import {
    expandAbbreviation,
    abbreviationTracker
  } from '@emmetio/codemirror6-plugin'
  export let lang = 'txt'
  export let focused = false
  let langExt: Extension | undefined
  let editor: EditorView | undefined

  if (lang == 'txt') {
    langExt = undefined
  } else if (lang == 'js') {
    langExt = javascript()
  } else if (lang == 'html' || lang == 'svg') {
    langExt = html()
  } else if (lang == 'css') {
    langExt = css()
  }

  $: {
    if (CodeMirrorEditor) {
      if (!editor) {
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
              const from: 'up' | 'down' | 'left' | 'right' = o
                ? 'right'
                : 'down'
              const to: 'up' | 'down' | 'left' | 'right' = o
                ? 'down'
                : 'right'
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
        if (langExt) {
          extensionArr.push(langExt)
        }
        editor = new EditorView({
          extensions: extensionArr,
          parent: CodeMirrorEditor,
          doc
        })
      }
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
