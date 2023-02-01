<script>
  import './global.css'
  import { base } from '$app/paths'
</script>

<main class="card header">
  <h1>Whoops, something went wrong.</h1>

  <p data-color="red">
    Try going back <a class=".accent-color" href={`${base}/`}>home</a>
    or use the links above to find what you are looking for.
  </p>
</main>

<style>
  .card {
    background-color: hsla(var(--hue), 100%, 45%, 0.1);
    --spacing: 2rem;
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
    color: var(--secondary);
    text-decoration: none;
    height: calc(100vh - 6rem);
  }

  a {
    color: var(--color);
  }
</style>
