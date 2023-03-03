<script lang="ts">
  import { browser } from '$app/environment'
  import { onDestroy, onMount } from 'svelte'
  import { mobile } from '../stores'
  import CodeMirror from './CodeMirror.svelte'
  import Files from './Previewer/Files.svelte'
  import type { Tab, FileTab } from './Previewer/tab'
  import { base } from '$app/paths'
  import IframeMessager from './IframeMessager.svelte'
  export let paths: string[] = []
  export let root: string
  let codeMirrorFocused = false
  let selected: Tab | undefined
  let tabs: Tab[] = [
    { title: 'Loading...', id: 'loading', selected: false, index: 0 }
  ]
  $: fileUrl =
    previewedTab && browser
      ? new URL(previewedTab.path, window.location.origin + base)
      : undefined
  let previewedTab: FileTab | undefined
  let iframe: IframeMessager | undefined

  const handleIframeMessage = (e: MessageEvent) => {
    if (e.data.type === 'goto') {
      if (iframe) {
        previewedTab = tabs
          .filter(isFile)
          .filter((tab) => tab.path == e.data.url)[0]
        const html = getHTML(previewedTab)
        iframe.src = htmlToDataURL(html)
      }
    }
  }

  function getHighestCommonPath(paths: string[]) {
    const pathsSplit = paths.map((path) =>
      path.split('/').slice(0, -1)
    )

    const commonPath = []
    for (let i = 0; i < pathsSplit[0].length; i++) {
      const currentPath = pathsSplit[0][i]
      if (pathsSplit.every((path) => path[i] === currentPath)) {
        commonPath.push(currentPath)
      } else {
        break
      }
    }
    return commonPath.join('/')
  }

  if (paths.indexOf(root) != 0 && paths.indexOf(root) != -1) {
    paths.splice(paths.indexOf(root), 1)
  }

  if (!paths.includes(root)) {
    paths.unshift(root)
  }

  function select(tab: Tab) {
    if (selected === tab) {
      tabs[tab.index].selected = false
      selected = undefined
      return
    }
    if (selected) {
      selected.selected = false
    }
    if (tab.id === 'preview') {
      previewedTab = tabs.filter(isFile)[0]
    }
    selected = tab
    tabs[tab.index].selected = true
  }

  async function getTabs() {
    const tabPromises = paths.map(async (path, index) => {
      path = base + path
      const commonPath = getHighestCommonPath(paths)
      const commonPathLength = commonPath.length
      const relativePath = path.slice(commonPathLength)
      const lang = path.slice(path.lastIndexOf('.') + 1)
      const fileContent = await fetch(`${path}`).then((res) =>
        res.text()
      )
      return {
        path,
        relativePath,
        content: fileContent,
        selected: false,
        lang,
        index,
        title: relativePath,
        id: path
      }
    })
    tabs = await Promise.all(tabPromises)
    tabs[0].selected = true
    selected = tabs[0]
    if (
      (tabs[0] as FileTab).lang === 'html' ||
      (tabs[0] as FileTab).lang === 'svg'
    )
      tabs.push({
        title: 'Preview',
        id: 'preview',
        selected: false,
        index: tabs.length
      })
    return tabs
  }

  function isFile(tab: Tab): tab is FileTab {
    return (
      (tab as FileTab).content !== undefined &&
      (tab as FileTab).lang !== undefined
    )
  }

  function isImage(tab: FileTab) {
    return (
      tab.lang === 'png' ||
      tab.lang === 'jpg' ||
      tab.lang === 'jpeg' ||
      tab.lang === 'gif'
    )
  }
  function getHTML(htmlTab: FileTab): string {
    if (htmlTab.lang === 'svg') {
      const svg = new DOMParser().parseFromString(
        htmlTab.content,
        'image/svg+xml'
      )
      // wrap svg in html
      const html = document.createElement('html')
      const head = document.createElement('head')
      const body = document.createElement('body')
      html.appendChild(head)
      html.appendChild(body)
      // add css to head
      const css = /* css */ `
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        body {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        svg {
          width: 100%;
          max-width: 400px;
          height: 100%;
        }
      `
      const style = document.createElement('style')
      style.innerHTML = css
      head.appendChild(style)
      body.appendChild(svg.documentElement)
      return '<!DOCTYPE html>' + html.outerHTML
    }
    const css: { [path: string]: string } = {}
    const js: { [path: string]: string } = {}
    const htmlFiles: { [path: string]: FileTab } = {}
    let html = htmlTab.content
    let fileTabs = tabs.filter(isFile)
    for (const file of fileTabs) {
      if (file.lang === 'css') {
        css[file.path] = file.content
      } else if (file.lang === 'js') {
        js[file.path] = file.content
      } else if (file.lang === 'html' || file.lang === 'svg') {
        htmlFiles[file.path] = file
      }
    }
    // parse html for css and js links
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    // find style tags
    const linkTags = doc.documentElement.querySelectorAll('link')
    for (const linkTag of linkTags) {
      // get rel attribute
      const rel = linkTag.getAttribute('rel')
      // if rel is stylesheet
      if (rel === 'stylesheet') {
        // get href attribute
        const href = linkTag.getAttribute('href')
        // resolve href from root
        if (!href) {
          continue
        }
        const resolvedHref = new URL(href, fileUrl)
        // get file content
        const content = css[resolvedHref.pathname]
        // if file content exists
        if (content) {
          // replace link tag with style tag with content
          const styleTag = doc.createElement('style')
          styleTag.innerHTML = content
          linkTag.replaceWith(styleTag)
        }
      }
    }
    // find script tags
    const scriptTags = doc.querySelectorAll('script')
    for (const scriptTag of scriptTags) {
      // get src attribute
      const src = scriptTag.getAttribute('src')
      // if src is a file
      if (src) {
        // get file content
        console.log({
          base: fileUrl,
          path: htmlTab.path,
          fileUrl
        })
        const resolvedSrc = new URL(src, fileUrl)
        const fileContent = js[resolvedSrc.pathname]
        // if file content exists
        if (fileContent) {
          // replace script tag with script tag with content
          const newScriptTag = doc.createElement('script')
          newScriptTag.innerHTML = fileContent
          scriptTag.replaceWith(newScriptTag)
        } else {
          scriptTag.src = resolvedSrc.href
        }
      }
    }
    // find img tags
    const imgTags = doc.querySelectorAll('img')
    // resolve src from root
    for (const imgTag of imgTags) {
      const src = imgTag.getAttribute('src')
      if (!src) {
        continue
      }
      const resolvedSrc = new URL(src, new URL(htmlTab.path, fileUrl))
      imgTag.setAttribute('src', resolvedSrc.href)
    }
    // find a tags
    const aTags = doc.querySelectorAll('a')
    // resolve href from root
    for (const aTag of aTags) {
      const href = aTag.getAttribute('href')
      if (!href) {
        continue
      }
      const resolvedHref = new URL(
        href,
        new URL((tabs[0] as FileTab).path, fileUrl)
      )
      // check if href is an html file
      const file = htmlFiles[resolvedHref.pathname]
      if (file) {
        aTag.setAttribute(
          'onclick',
          `parent.postMessage({type: "goto", url: "${resolvedHref.pathname}"}, "*"); return false`
        )
      } else {
        aTag.setAttribute('href', resolvedHref.href)
      }
    }
    // check if the document is not in quirks mode
    const standardMode = doc.compatMode === 'CSS1Compat'
    return (
      (standardMode ? '<!DOCTYPE html>' : '') +
      doc.documentElement.outerHTML
    )
  }

  const htmlToDataURL = (html: string) => {
    return 'data:text/html;charset=utf-8,' + encodeURIComponent(html)
  }

  const getTitle = (tab: FileTab) => {
    // get title from html
    const html = getHTML(tab)
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    // get title tag
    const titleTag = doc.querySelector('title')
    // if title tag exists
    if (titleTag) {
      // get title tag text
      const title = titleTag.textContent
      // if title tag text exists
      if (title) {
        // return title tag text
        return title
      }
    }
    return ''
  }

  const tabsPromise = getTabs()
</script>

{#await tabsPromise}
  <div class="parent">
    <div class="message">Loading...</div>
  </div>
{:then _}
  <div class="parent" class:deselected={selected === undefined}>
    <Files on:select={(e) => select(e.detail)} {tabs} />
    <div class="message">
      {#if codeMirrorFocused && !$mobile}
        <span>
          Press <kbd>esc</kbd> and then either
          <kbd>tab</kbd>
          or <kbd>shift</kbd> +
          <kbd>tab</kbd> to tab out of the editor
        </span>
      {:else if !selected}
        Select a file above to view it
      {:else if isFile(selected)}
        <span class="filename">
          {selected.path.slice(1) + '/'}
        </span>
      {:else if selected.id === 'preview' && previewedTab !== undefined}
        <span class="title">
          {getTitle(previewedTab) || previewedTab.path}
        </span>
      {/if}
    </div>
    {#key selected?.index}
      {#if selected}
        {#if isFile(selected)}
          {#if isImage(selected)}
            <img src={selected.path} alt={selected.title} />
          {:else}
            <CodeMirror
              bind:focused={codeMirrorFocused}
              lang={selected.lang}
              bind:doc={selected.content} />
          {/if}
        {:else if selected.id === 'preview' && isFile(tabs[0])}
          <IframeMessager
            bind:this={iframe}
            style="width: 100%; border-radius: 0; height: calc(100vh - 8.75rem)"
            title={selected.title}
            src={htmlToDataURL(getHTML(tabs[0]))}
            on:message={onmessage} />
        {/if}
      {/if}
    {/key}
  </div>
{/await}

<style lang="scss">
  .parent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    height: calc(100vh - 4.5rem);
    --medium-bright: hsl(var(--hue), 50%, 20%);
    --dark: hsl(var(--hue), 70%, 70%);
    --bright: #1e1729;
    --highlight: var(--color);
    background-color: var(--dark);
    color: #d4d4d4;
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    &.deselected {
      height: auto;
    }
  }
  .message {
    background-color: var(--bright);
    text-align: center;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    overflow: hidden;
  }

  .message .filename {
    flex-grow: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
    width: max-content;
    text-align: center;
    direction: rtl;
    white-space: pre;
  }
</style>
