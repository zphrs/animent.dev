import { writable } from 'svelte/store'
import { readable } from 'svelte/store'
import { browser } from '$app/environment'
const mobileThreshold = 600

export const previousPageIndex = writable(-1)
export const mobile = readable(false, function start(set) {
  if (browser) {
    function update() {
      set(window.innerWidth <= mobileThreshold)
    }
    update()
    window.addEventListener('resize', update)
    return function stop() {
      window.removeEventListener('resize', update)
    }
  }
})
