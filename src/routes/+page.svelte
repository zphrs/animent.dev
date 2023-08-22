<script lang="ts">
  import { fly } from 'svelte/transition'
  import { expoOut } from 'svelte/easing'
  import { previousPageIndex } from '../stores'
  import { base } from '$app/paths'
  previousPageIndex.set(-1)
</script>

<svelte:head><title>Animent.dev</title></svelte:head>
<div
  in:fly={{
    x: 0,
    y: 100,
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
  <div class="cards">
    <div class="card header">
      <h1>
        <span data-color="green">Ani&shy;</span><span
          data-color="orange">ment</span
        >&shy;.<span data-color="purple">dev</span>
      </h1>
      <h2>
        <a href={`${base}/animate/`} data-color="green">Animate</a>,
        <a href={`${base}/experiment/`} data-color="orange"
          >Experiment</a
        >,
        <a href={`${base}/develop/`} data-color="purple">Develop</a>:
        Learn web development in three stages
      </h2>
    </div>
    <a href={`${base}/animate/`} class="card" data-color="green">
      <h3>Level 1: Animate</h3>
      <p>
        Hand code SVG images, and then animate those images to create
        stunning animations.
      </p>
    </a>
    <a href={`${base}/experiment/`} class="card" data-color="orange">
      <h3>Level 2: Experiment</h3>
      <p>
        Use JavaScript with HTML and CSS to create an engaging and
        interactive experiment: a game, a microapp, or a web toy.
      </p>
    </a>
    <a
      href={`${base}/develop/`}
      class="develop card"
      data-color="purple">
      <h3>Level 3: Develop</h3>
      <p>
        Develop complete applications with the Svelte framework,
        complete with a NodeJS backend.
      </p>
    </a>
  </div>

  <div class="about card">
    <h2>About</h2>
    <p>
      This site was made in collaboration with <a
        href="https://codeforfun.com">Code For Fun</a>
      to teach web design. For each level there is editable example code.
      You can edit the example code and see a preview of the page with
      your edits, but any edits you make will disappear once you refresh
      the page. If you want to save your changes I recommend copying and
      pasting your edits into
      <a href="https://replit.com">replit.com</a>,
      <a href="https://code.visualstudio.com/">Visual Studio Code</a>,
      or a different text editor.
    </p>
  </div>
</div>

<style lang="scss">
  .about {
    margin-top: 2rem;
  }

  .cards {
    display: grid;
    grid-template-rows: minmax(80vh, auto) 1fr 1fr 1fr;
    gap: 0.5rem;
  }

  a[href*="//"]
  {
    color: blue;
    background-color: hsla(240, 100%, 45%, 0.1);
    padding: 0.1rem 0.5rem;
    border-radius: 0.25rem;
  }

  h1 {
    font-size: 13vw;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  .card {
    background-color: hsla(var(--hue), 100%, 45%, 0.1);
    --spacing: 2rem;
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
    color: var(--secondary);
    text-decoration: none;
    transform: perspective(1000px);
  }

  a.card {
    transition: transform 1s ease-out, box-shadow 1s ease-out;
  }

  a.card:hover,
  a.card:focus {
    transform: perspective(1000px) translateZ(10px);
    box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.2),
      0 0 5px rgba(0, 0, 0, 0.2);
    transition-timing-function: ease;
  }

  .header {
    background-color: transparent;
    background: linear-gradient(
      135deg,
      hsl(var(--hue-green), 100%, 45%, 0.1),
      hsl(var(--hue-orange), 100%, 45%, 0.1),
      hsl(var(--hue-purple), 100%, 45%, 0.1),
      hsl(var(--hue-green), 100%, 45%, 0.1),
      hsl(var(--hue-orange), 100%, 45%, 0.1),
      hsl(var(--hue-purple), 100%, 45%, 0.1),
      hsl(var(--hue-green), 100%, 45%, 0.1)
    );
    grid-column: 1 / -1;
    background-size: 600% 600%;
    background-repeat: repeat;
    background-position: 0% 50%;
    display: flex;
    justify-content: space-evenly;
    animation: gradient 5s linear infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 61.5% 61.5%;
    }
  }

  h1 {
    background-size: 100%;
    width: fit-content;
  }

  @media screen and (min-width: 700px) and (min-height: 700px) {
    h1 {
      font-size: max(6vw, 2.6rem);
    }
    h2 {
      font-size: 1.75rem;
    }
  }

  @media screen and (min-width: 900px) {
    .cards {
      grid-template-rows: 1fr auto;
      grid-template-columns: repeat(3, 1fr);
      min-height: 80vh;
      height: fit-content;
      gap: 1rem;
      margin: auto;
    }
  }

  @media screen and (min-width: 1000px) {
    h1 {
      font-size: 8vw;
    }
    h2 {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 700px) and (min-height: 700px) {
    .cards {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: unset;
      grid-template-areas: 'header l1' 'header l2' 'header l3';
    }
    .header {
      grid-area: header;
      justify-content: space-around;
    }

    .card:nth-child(2) {
      grid-area: l1;
    }
    .card:nth-child(3) {
      grid-area: l2;
    }
    .card:nth-child(4) {
      grid-area: l3;
    }
  }

  @media screen and (min-width: 1000px) and (min-height: 700px) {
    .cards {
      grid-template-columns: 1.61fr 1fr;
    }
  }
  .card h3 {
    color: var(--color);
  }
  a {
    color: var(--color);
  }
  span {
    color: var(--color);
  }
</style>
