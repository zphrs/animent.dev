<script lang="ts">
  import { onDestroy, onMount, createEventDispatcher } from 'svelte'
  import { browser } from '$app/environment'
  import { HtmlTag } from 'svelte/internal'
  import scrollEnd from './scrollEnd'
  export let id: string
  export let nextDivId: string
  export let level: number
  let li: HTMLLIElement
  let clampedProgress: number, progress: number
  let div: HTMLElement | null = null
  let nextDiv: HTMLElement | null = null
  let active: boolean, passed: boolean
  const broadcast = createEventDispatcher<{
    scrollTo: HTMLLIElement
    active: { isActive: boolean; element: HTMLLIElement }
    passed: { isPassed: boolean; element: HTMLLIElement }
  }>()
  $: innerHeight = 0
  $: active = clampedProgress > 0 && clampedProgress < 1
  $: passed = clampedProgress >= 1
  $: broadcast('active', { isActive: true, element: li })
  $: broadcast('passed', { isPassed: true, element: li })
  $: if ((!passed && active) || (!passed && !active)) {
    if (progress && progress < 1 && progress > -1) {
      broadcast('scrollTo', li)
    }
  }
  // get the parent of the header
  function setProgress() {
    window.setTimeout(() => {
      if (!innerHeight || !div) return
      // get top of parent
      const { top } = div.getBoundingClientRect()
      // get top of next header
      const height = nextDiv
        ? nextDiv.getBoundingClientRect().top - top
        : document.body.getBoundingClientRect().bottom - top
      progress = (innerHeight - top) / height
      clampedProgress = Math.max(0, Math.min(1, progress))
    }, 10)
  }
  let scrollTimeout: number
  async function scrollIntoView(event: MouseEvent) {
    if (!div) return
    event.preventDefault()
    const start = window.scrollY
    history.pushState('', '', `#${id}`)
    // wait for the scroll to finish
    div.scrollIntoView({
      behavior: 'auto',
      block: 'start'
    })
    await scrollEnd()
    if (start < window.scrollY) {
      event.target && (event.target as HTMLElement).blur()
      return
    }
    // window.scrollBy({ left: 0, top: -100, behavior: "smooth" })
    // await waitForScrollEnd()
    // get height of nav element
    const { height } = document
      .querySelector('nav')!
      .getBoundingClientRect()
    // scroll to the top of the header
    window.scrollBy({
      left: 0,
      top: -height,
      behavior: 'smooth'
    })
    // window.scrollBy({ left: 0, top: 100, behavior: "smooth" })
    // await waitForScrollEnd()
    await new Promise((resolve) => setTimeout(resolve, 0))
    event.target && (event.target as HTMLElement).blur()
  }
  onMount(() => {
    div = document.getElementById(`${id}`)
    nextDiv = document.getElementById(nextDivId)
    setProgress()
  })
</script>

<svelte:window
  bind:innerHeight
  on:click={setProgress}
  on:scroll={setProgress} />

<li
  bind:this={li}
  data-level={level}
  style={`--progress: ${clampedProgress * 100}%`}
  class:active
  class:passed>
  <a href={`#${id}`} on:click={scrollIntoView}>
    <slot />
  </a>
</li>

<style>
  li {
    list-style: none;
    position: relative;
    margin: 0;
    padding: 0;
    --secondary: var(--hue), 100%, 50%;
    --accent: var(--hue), 100%, 70%;
    --accent-color: hsl(var(--hue), 100%, 20%);
  }

  li[data-level='2'] {
    margin-left: 0rem;
  }

  li[data-level='3'] {
    margin-left: 1rem;
  }

  li[data-level='4'] {
    margin-left: 2rem;
  }

  li[data-level='5'] {
    margin-left: 3rem;
  }

  a {
    --progress: 50;
    display: block;
    width: fit-content;
    text-align: left;
    padding: 0.25rem;
    padding-left: 1rem;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
    color: inherit;
    font: inherit;
    text-decoration: none;
  }
  li.passed {
    background: hsla(var(--secondary), 0.1);
  }
  li.active {
    background-color: hsla(var(--accent), 0.2);
  }
  a:hover,
  a:focus {
    background-color: hsla(var(--accent), 0.4);
  }
  li::before {
    /* make a vertical line */
    content: '';
    display: block;
    width: 0.25rem;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: hsl(var(--secondary));
  }
  li::after {
    /* make a vertical line with height of progress */
    content: '';
    display: block;
    width: 0.25rem;
    height: var(--progress);
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--accent-color);
  }
</style>
