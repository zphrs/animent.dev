import type { Load } from '@sveltejs/kit'
export const load: Load = async ({ params }) => {
  const post = await import(`../${params.slug}.md`)
  const { title, color, headings } = post.metadata
  const content = post.default
  return {
    content,
    title,
    color,
    headings,
    slug: params.slug
  }
}
