<script lang="ts">
  import { page } from '$app/stores'
  import paths from './navPaths'
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'
  import { mobile as isMobile } from '../stores'
  import { base } from '$app/paths'
  let nav: HTMLElement
  // listen for scroll if browser
  let transformY = 0
  let navHeight = 0
  let prevY = 0
  $: currentPath = paths.find(
    ([_, path]) => path === $page.url.pathname
  )
  $: if ($isMobile) transformY = 0
  if (browser) {
    prevY = window.scrollY
    window.addEventListener('scroll', () => {
      if ($isMobile) {
        transformY = 0
        return
      }
      const change = window.scrollY - prevY
      prevY = window.scrollY
      if (change > 0) {
        // scrolling down
        if (transformY > -navHeight) {
          transformY -= change
          if (transformY < -navHeight) transformY = -navHeight
        }
      } else {
        // scrolling up
        if (transformY < 0) {
          transformY -= change
          if (transformY > 0) transformY = 0
        }
      }
    })
    onMount(() => {
      navHeight = nav.getBoundingClientRect().height
      // listen for resize
      let timeout: NodeJS.Timeout | null = null
      window.addEventListener('resize', () => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
          navHeight = nav.getBoundingClientRect().height
        }, 50)
      })
    })
  }
</script>

<nav
  data-color={currentPath ? currentPath[2] : ''}
  bind:this={nav}
  style={`transform: translateY(${transformY}px)`}>
  {#each paths as [label, path, color]}
    <a
      href={path !== $page.url.pathname ? path : `${base}/`}
      class="chip"
      data-color={color}
      class:active={path === $page.url.pathname}>{label}</a>
  {/each}
</nav>

<style>
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75em;
    padding: 1em 0;
    z-index: 1;
    position: sticky;
    background: linear-gradient(
      to bottom,
      var(--primary) 100%,
      rgba(255, 255, 255, 0)
    );
    top: 0;
  }
  @media screen and (max-width: 600px) {
    nav {
      top: unset;
      position: fixed;
      width: 100%;
      bottom: 0;
    }

    :global(main) {
      padding-bottom: 4.5rem;
    }
  }

  .chip {
    color: var(--color);
    background-color: hsla(var(--hue), 100%, 45%, 0.3);
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    white-space: nowrap;
    font-size: 1.2rem;
    border: 0.25rem solid hsla(var(--hue), 100%, 50%, 0.1);
    transition-delay: 0;
    transition-property: box-shadow, background-color, color, border;
    transition-duration: var(--dur-page-transition-half);
    transition-timing-function: linear, linear, linear, ease-out;
    text-decoration: none;
  }

  .chip:hover,
  .chip:focus {
    border-color: var(--color);
  }

  .chip.active:focus {
    border-color: var(--color);
    outline: 0rem solid var(--color);
  }

  .chip.active {
    transition: outline var(--dur-page-transition) ease-out;
    color: hsla(var(--hue), 100%, 95%);
    background-color: var(--color);
    border-color: white;
    box-shadow: inset 0 0 0.5rem hsla(var(--hue), 100%, 20%);
  }
</style>
