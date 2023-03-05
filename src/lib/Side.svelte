<script lang="ts">
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'
  import { onDestroy } from 'svelte'
  import {
    afterNavigate,
    beforeNavigate
  } from '$app/navigation'
  let collapsed: boolean = true
  const mobileThreshold = 1200
  let div: HTMLElement,
    slot: HTMLElement,
    width: number = 250
  $: innerWidth = 0
  // on resize set mobile
  function collapse(_e?: MouseEvent) {
    collapsed = !collapsed
    if (div) width = div.getBoundingClientRect().width
    div.querySelector('button')?.blur()
  }
  onMount(() => {
    if (div) width = div.getBoundingClientRect().width
  })
  $: mobile = innerWidth
    ? innerWidth < mobileThreshold
    : true
  let timeout: NodeJS.Timeout | null = null
  const onResize = (mobile: boolean) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      if (div) width = div.getBoundingClientRect().width
      if (mobile && !collapsed) collapse()
      else if (!mobile && collapsed) collapse()
    }, 0)
  }

  function onSlotClick() {
    if (mobile && !collapsed) collapse()
    else if (collapsed) collapse()
  }
  if (browser) {
    afterNavigate(({ from }) => {
      if (from === null) {
        // if it is initial load of spa
        if (div) {
          if (mobile && !collapsed) collapse()
          else if (!mobile && collapsed) collapse()
        }
        return
      }
      window.setTimeout(() => {
        if (div) {
          if (mobile && !collapsed) collapse()
          else if (!mobile && collapsed) collapse()
        }
      }, 0)
    })

    beforeNavigate(() => {
      if (div) {
        if (mobile && !collapsed) collapse()
        else if (!mobile && collapsed) collapse()
      }
    })
    // listen for touch down event
    let down = false
    let start = { x: 0, y: 0 }
    function onTouchStart(e: TouchEvent) {
      down = true
      start = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      }
    }
    function onTouchMove(e: TouchEvent) {
      if (down) {
        const x = e.touches[0].clientX
        const y = e.touches[0].clientY
        const dx = x - start.x
        const dy = y - start.y
        if (
          Math.abs(dx) * 0.1 > Math.abs(dy) &&
          Math.abs(dx) > 100
        ) {
          if (dx < 0) {
            if (!collapsed) collapse()
          } else {
            if (collapsed) collapse()
          }
        }
      }
    }

    function onTouchEnd(e: TouchEvent) {
      down = false
    }
    document.addEventListener('touchmove', onTouchMove)
    document.addEventListener('touchstart', onTouchStart)
    document.addEventListener('touchend', onTouchEnd)

    onDestroy(() => {
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener(
        'touchstart',
        onTouchStart
      )
      document.removeEventListener('touchend', onTouchEnd)
    })
  }
</script>

<svelte:window
  bind:innerWidth
  on:resize={() => onResize(mobile)} />

<aside>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="disable"
    class:collapsed={mobile ? collapsed : true}
    on:click={collapse} />
  <div
    class="side"
    bind:this={div}
    class:collapsed
    class:mobile
    style={`--width: ${width}px`}>
    <button on:click={collapse}>
      <i
        ><svg
          class="app-switcher-button-icon"
          version="1.1"
          id="Layer_1"
          x="0"
          y="0"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          enable-background="new 0 0 24 24"
          xml:space="preserve"
          ><path
            d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z" /><path
            fill="none"
            d="M0,0h24v24H0V0z" /></svg
        ></i
      ></button>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      bind:this={slot}
      on:click={onSlotClick}
      on:focusin={() => collapsed && collapse()}>
      <slot name="main" />
    </div>
  </div>
  <slot name="under" />
</aside>

<style>
  .disable {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: hsl(var(--avg), 0.3);
    transition: background-color 0.2s, backdrop-filter 1s,
      -webkit-backdrop-filter 1s;
    transform-origin: right;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    z-index: 5;
  }
  .disable.collapsed {
    background: hsl(var(--primary), 0);
    backdrop-filter: blur(0);
    -webkit-backdrop-filter: blur(0);
    pointer-events: none;
  }
  .side {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: hsl(var(--lighter-secondary));
    height: 100%;
    z-index: 10;
    --width: 0px;
    --transition-speed: 0.5s;
    --lgt-secondary: var(--hue), 45%, 70%;
    --lighter-secondary: var(--hue), 59%, 93%;
    --lgt-accent: var(--hue), 70%, 70%;
    text-align: right;
    transition: left var(--transition-speed) ease-out;
    padding-top: 3rem;
  }
  .side.collapsed {
    left: calc(var(--width) * -1);
    transition: left var(--transition-speed)
      var(--transition-speed) ease-out;
  }
  .side button {
    position: absolute;
    top: 0.5rem;
    right: 0%;
    width: calc(100% - 0.5rem);
    height: 2rem;
    border-radius: 1rem;
    outline: none;
    z-index: 50;
    font: inherit;
    cursor: pointer;
    text-align: left;
    border: none;
    color: inherit;
    background: hsl(var(--lgt-secondary));
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0 0 0px var(--secondary);
    transition: right var(--transition-speed)
        var(--transition-speed),
      width var(--transition-speed) var(--transition-speed),
      border-radius var(--transition-speed)
        var(--transition-speed),
      background-color var(--transition-speed),
      box-shadow var(--transition-speed)
        var(--transition-speed),
      padding-left var(--transition-speed)
        var(--transition-speed);
    box-sizing: border-box;
  }
  @media screen and (max-width: 600px) {
    .side button {
      top: unset;
      bottom: 5rem;
    }
    .side {
      padding-left: 0.75rem;
      box-sizing: border-box;
      padding-top: 0.5rem;
    }
  }
  .side button:hover,
  .side button:focus {
    width: calc(100% + 1.5rem);
    right: -2rem;
    border-radius: 1rem;
    padding-left: calc(var(--width) * 0.125);
    background-color: hsl(var(--lgt-secondary));
    box-shadow: 0 0 0px var(--secondary);
    transition: width calc(var(--transition-speed) * 2),
      right calc(var(--transition-speed) * 2),
      padding-left calc(var(--transition-speed) * 2),
      border-radius calc(var(--transition-speed) * 2),
      box-shadow var(--transition-speed),
      background-color calc(var(--transition-speed) * 2);
  }
  .side button:hover i,
  .side button:focus i {
    transform: rotate(135deg);
    transition: transform calc(var(--transition-speed) * 2);
  }
  .side.collapsed button:hover i,
  .side.collapsed button:focus i {
    transform: translate(20%) rotate(45deg);
    transition: transform calc(var(--transition-speed) * 2);
  }
  .side.collapsed button {
    right: -2rem;
    left: auto;
    width: calc(var(--width) + 2rem);
    border-radius: 2rem;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background: hsl(var(--lgt-accent));
    padding-left: calc(var(--width) + 0.5rem);
    box-shadow: 0 0 5px var(--secondary);
    transition: right var(--transition-speed),
      width var(--transition-speed),
      border-radius var(--transition-speed)
        var(--transition-speed),
      box-shadow calc(var(--transition-speed) * 2)
        var(--transition-speed),
      background-color var(--transition-speed),
      padding-left var(--transition-speed);
  }
  .side.collapsed.mobile button {
    right: -1.5rem;
  }
  .side.collapsed.mobile button:hover,
  .side.collapsed.mobile button:focus {
    right: -2.5rem;
  }
  .collapsed button:hover,
  .collapsed button:focus {
    right: -3rem;
    padding-left: calc(var(--width) - 1rem);
    background-color: hsl(var(--lgt-secondary));
    transition-duration: calc(var(--transition-speed) * 2);
  }
  .side.collapsed i {
    transform: rotate(0deg);
  }
  .collapsed.mobile button:hover,
  .collapsed.mobile button:focus {
    padding-left: calc(var(--width) + 0.5rem);
    background-color: hsl(var(--lgt-accent));
    transition-duration: calc(var(--transition-speed) * 2);
  }
  .side i {
    font-style: normal;
    transform: rotate(180deg);
    transition: transform var(--transition-speed)
      var(--transition-speed);
    display: inline-block;
    width: fit-content;
    width: 1.25em;
    height: 100%;
  }
  svg {
    fill: var(--secondary-color);
  }
</style>
