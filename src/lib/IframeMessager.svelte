<script lang="ts">
  import { browser } from '$app/environment'
  import { onDestroy, onMount } from 'svelte'
  export let title: string
</script>

<svelte:window on:message />
<iframe {title} {...$$props} />
