export default async function scrollEnd() {
  let scrollTimeout: number
  let scrollListenerFunction: (e: Event) => void
  const listenToScroll = (resolve: () => void) => {
    // if not unmounted
    window.clearTimeout(scrollTimeout)
    scrollTimeout = window.setTimeout(() => {
      window.removeEventListener(
        'scroll',
        scrollListenerFunction
      )
      resolve()
    }, 12)
  }
  return new Promise<void>((resolve) => {
    scrollListenerFunction = listenToScroll.bind(
      null,
      resolve
    )
    window.addEventListener(
      'scroll',
      scrollListenerFunction
    )
  })
}
