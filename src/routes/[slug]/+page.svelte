<script lang="ts">
  import { fly } from 'svelte/transition'
  import { expoOut } from 'svelte/easing'
  import { onDestroy } from 'svelte'
  import { previousPageIndex } from '../../stores'
  export let data: {
    title: string
    color: string
    headings: Array<{
      level: number
      title: string
      id: string
      element: HTMLElement | null
    }>
    content: any
  }
  $: ({ title, color, headings } = data)
  /**@type Array<{level: number, title: string, id: string, element: HTMLElement | null}> */
  import paths from '../navPaths'
  let direction: number
  $: {
    const titleOrder = paths.map((path) => path[0])
    const titleIndex = titleOrder.indexOf(title)
    const previousIndex = $previousPageIndex

    direction =
      previousIndex === -1
        ? 0
        : Math.sign(titleIndex - previousIndex)
    previousPageIndex.set(titleIndex)
  }
  onDestroy(() => {})
  import '$lib/markdown.scss'
  import Side from '$lib/Side.svelte'
  import Toc from '$lib/TOC/Toc.svelte'
  import type { Highlighter } from 'shiki'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
{#key data}
  <div data-color={color}>
    <Side>
      <span slot="main" class="table-of-contents">
        <Toc {headings} />
      </span>
    </Side>
    <article
      in:fly={{
        x: direction * 100,
        y: direction === 0 ? 100 : 0,
        duration:
          parseFloat(
            window
              .getComputedStyle(document.documentElement)
              .getPropertyValue('--dur-page-transition')
          ) * 1000,
        opacity: 0,
        easing: expoOut
      }}
      class="card markdown">
      <svelte:component this={data.content} />
    </article>
  </div>
{/key}

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
