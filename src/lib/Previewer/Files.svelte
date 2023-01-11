<script lang="ts">
  import type { Tab } from './tab'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher<{ select: Tab }>()
  export let tabs: Tab[] = []
</script>

<div class="tab-bar">
  {#each tabs as tab}
    <button
      class="filename"
      on:click={() => dispatch('select', tab)}
      class:selected={tab.selected}>
      {tab.title}</button>
  {/each}
</div>

<style>
  .tab-bar {
    padding-top: 0.2rem;
    display: flex;
    background-color: var(--dark);
    overflow: hidden;
    position: relative;
  }
  .filename {
    border: none;
    outline: none;
    background-color: var(--medium-bright);
    margin: 0;
    padding: 0.5rem;
    padding-left: calc(min(5vw, 20px) + 5px);
    padding-right: min(5vw, 20px);
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
    width: max-content;
    flex-grow: 0;
    flex-shrink: 1;
    cursor: pointer;
    border-radius: 0.5rem;
    transform: scale(0.9);
    transform-origin: 50% 20%;
    color: inherit;
    transition: border-radius 0.5s, background-color 0.5s,
      padding-left 0.5s, transform 0.5s;
    transition-property: border-radius, background-color, padding-left,
      transform, margin;
    transition-duration: 0.5s;
  }
  .filename:hover,
  .filename:focus {
    background-color: var(--highlight);
    transform: scale(0.95);
  }
  .filename:focus::after {
    height: 100%;
  }
  .filename.selected:focus::after {
    height: calc(100% + 0.75rem);
  }
  .filename::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0rem;
    width: 100%;
    transform: scaleX(0.2);
    height: 0.25rem;
    background-color: var(--bright);
    transition: transform 0.5s;
    border-radius: 0.5rem;
    z-index: -1;
  }
  .filename:hover::after,
  .filename:focus::after {
    bottom: -0.25rem;
    height: 0.5rem;
    transform: scaleX(0.5);
    transition: background-color 0.25s, bottom 0.5s ease-in,
      height 0.5s ease-in, transform 0.5s ease-out;
  }
  .filename.selected::after {
    bottom: -1rem;
    height: calc(100% + 1rem);
    background-color: var(--bright);
    transform: scaleX(1);
    border-radius: 0.5rem;
    transition: background-color 0.25s, bottom 0.5s ease-in,
      height 0.5s ease-in, transform 0.5s ease-out;
  }

  .filename.selected {
    transform: scale(1);
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .filename.selected::before {
    display: none;
  }
  .filename.selected + .filename::before {
    display: none;
  }
</style>
