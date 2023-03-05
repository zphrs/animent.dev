import type { Load } from '@sveltejs/kit'

type Out = {
  title: string
  color: string
  headings: Array<{
    level: number
    title: string
    id: string
    element: HTMLElement | null
  }>
  content: any
}

export const load: Load = async ({ params }) => {
  const post = await import(`../../pages/${params.slug}.md`)
  const { title, color, headings } = post.metadata
  const content = post.default
  return {
    content,
    title,
    color,
    headings,
    slug: params.slug
  } as Out
}
