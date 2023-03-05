<svelte:options accessors />

<script lang="ts">
  import { browser } from '$app/environment'
  import { onDestroy, onMount } from 'svelte'
  export let title: string
  export let src: string
  $: console.log(src)
</script>

<svelte:window on:message />

<iframe {title} {src} {...$$props} />
