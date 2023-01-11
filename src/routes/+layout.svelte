<script lang="ts">
  import { page } from '$app/stores'
  import Nav from './Nav.svelte'
  import paths from './navPaths'
  import './global.css'
</script>

<Nav />
<main>
  <slot />
</main>

<style lang="scss">
</style>
