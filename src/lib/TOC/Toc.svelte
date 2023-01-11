<script lang="ts">
  import { browser } from '$app/environment'
  import { onDestroy, onMount } from 'svelte'
  import type Heading from './Heading'
  import scrollEnd from './scrollEnd'
  import TocElem from './TocElem.svelte'
  /** @type {Heading[]}*/
  export let headings: Heading[] = []
  let ul: HTMLElement | null
  let firstHeading = headings[0].title
  let otherHeadings = headings.filter(
    (heading) => heading.level <= 4 && heading.level > 1
  )
  let mostRecentScrolledTo: Set<HTMLLIElement> | null = null
  let scrollEndPromise: Promise<void> | null = null

  function getRangeOfOffsetHeights(
    elements: Array<HTMLLIElement>
  ) {
    let min = Infinity
    let max = min * -1
    let maxElement = elements[0] // just to assure ts that it is never null
    let minElement = elements[0] // just to assure ts that it is never null

    for (let element of elements) {
      const { offsetTop } = element
      if (offsetTop < min) {
        min = offsetTop
        minElement = element
      }
      if (offsetTop > max) {
        max = offsetTop
        maxElement = element
      }
    }
    return { min, max, minElement, maxElement }
  }

  function scrollUl(elements: HTMLLIElement[]) {
    if (!ul) return

    if (elements.length == 0) {
      return
    }

    const filtered = [...elements].filter((elem) =>
      elem.classList.contains('active')
    )
    if (filtered.length == 0) {
      ul.scrollTo({
        left: 0,
        top: elements[0].offsetTop - ul.offsetHeight / 2
      })
      return
    }

    const { min, max, maxElement, minElement } =
      getRangeOfOffsetHeights(filtered)
    if (
      max +
        maxElement.offsetHeight -
        (min - minElement.offsetHeight) <
      ul.offsetHeight
    ) {
      ul.scrollTo({
        left: 0,
        top:
          (max + min) / 2 -
          Math.max(
            maxElement.offsetHeight,
            minElement.offsetHeight
          ) -
          ul.offsetHeight / 2,
        behavior: 'smooth'
      })
      return
    }

    ul.scrollTo({
      left: 0,
      top:
        max - maxElement.offsetHeight - ul.offsetHeight / 2,
      behavior: 'smooth'
    })
  }

  async function scrollTo(li: HTMLLIElement) {
    if (!scrollEndPromise) {
      mostRecentScrolledTo = new Set()
      scrollEndPromise = scrollEnd()
      await scrollEndPromise
      scrollUl([...mostRecentScrolledTo])

      mostRecentScrolledTo = null
      scrollEndPromise = null
    }
    mostRecentScrolledTo?.add(li)
  }

  onDestroy(() => {
    ul = null
  })
  const nextDivMap = new Map()
  function nextDivId(heading: Heading) {
    let currLevel = heading.level
    while (currLevel > 1) {
      if (nextDivMap.has(heading))
        return nextDivMap.get(heading)
      const headingIndex = otherHeadings.findIndex(
        (el) => el == heading
      )
      const outHeading = otherHeadings
        .slice(headingIndex + 1) // look at all headings after curr heading
        .filter((el) => el.level == currLevel)[0]
      if (outHeading) {
        nextDivMap.set(heading, outHeading.id)
        return outHeading.id
      }
      currLevel--
    }
    return null
  }
</script>

<div class="parent">
  <h2>{firstHeading}</h2>
  <ul bind:this={ul}>
    {#each otherHeadings as heading}
      <TocElem
        on:scrollTo={(e) => scrollTo(e.detail)}
        id={heading.id}
        nextDivId={nextDivId(heading)}
        level={heading.level}>
        {heading.title}
      </TocElem>
    {/each}
  </ul>
</div>

<style>
  h2 {
    color: var(--color);
    margin: 0.25rem 0.5rem;
    margin-top: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    list-style: none;
    overflow-y: scroll;
  }
  .parent {
    height: calc(100vh - 8rem);
    display: flex;
    flex-direction: column;
  }
</style>
