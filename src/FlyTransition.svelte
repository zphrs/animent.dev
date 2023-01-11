<script lang="ts">
  import { fly } from 'svelte/transition'
  import { expoOut } from 'svelte/easing'
  // get url from the page store
  import { page } from '$app/stores'
  export let startingX = 0
  export let startingY = 100
</script>

{#key $page.url.pathname}
  <div
    in:fly={{
      x: startingX,
      y: startingY,
      duration:
        parseFloat(
          window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--dur-page-transition')
        ) * 1000,
      delay: 0,
      opacity: 0,
      easing: expoOut
    }}>
    <slot />
  </div>
{/key}
