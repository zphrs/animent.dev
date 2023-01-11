<script context="module">
  import Pre from './Pre.svelte'
  export { Pre as pre }
</script>

<script>
  import { fly } from 'svelte/transition'
  import { expoOut } from 'svelte/easing'
  import { onDestroy } from 'svelte'
  import { previousPageIndex } from '../stores'
  export let title = 'My App'
  export let color = 'green'
  /**@type Array<{level: number, title: string, id: string, element: HTMLElement | null}> */
  export let headings = []
  import paths from '../routes/navPaths'
  const titleOrder = paths.map((path) => path[0])
  const titleIndex = titleOrder.indexOf(title)
  const previousIndex = $previousPageIndex
  import './markdown.scss'
  import Side from './Side.svelte'
  import Toc from './TOC/Toc.svelte'
  onDestroy(() => {
    previousPageIndex.set(titleIndex)
  })
  const direction =
    previousIndex === -1
      ? 0
      : Math.sign(titleIndex - previousIndex)
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div data-color={color}>
  <Side>
    <span slot="main" class="table-of-contents">
      <Toc {headings} />
    </span>
  </Side>
  <article class="card markdown">
    <slot />
  </article>
</div>

<style lang="scss">
  article {
    background-color: var(--primary);
    background-color: hsla(var(--hue), 100%, 45%, 0.1);
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    margin: auto;
    margin-bottom: 0.5rem;
    width: 100%;
    max-width: 800px;
    margin-top: 1rem;
  }

  @media screen and (max-width: 600px) {
    article {
      margin-top: 0;
      border-radius: 0;
    }
  }
  .table-of-contents {
    max-width: 200px;
    display: block;
    text-align: left;
  }
</style>
