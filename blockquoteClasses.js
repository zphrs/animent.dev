// inspired by https://github.com/myl7/remark-github-beta-blockquote-admonitions/blob/main/src/index.ts

import { visit } from 'unist-util-visit'
export default function getHeadings() {
  /** @type {import('unified').Transformer} */
  return function transformer(tree) {
    visit(tree, (node) => {
      if (node.type !== 'blockquote') return
      const blockquote = node
      if (
        blockquote.children.length <= 0 ||
        blockquote.children[0].type != 'paragraph'
      )
        return

      const firstParagraph = blockquote.children[0]
      if (firstParagraph.children.length <= 0) return

      const firstParagraphChild = firstParagraph.children[0]
      if (firstParagraphChild.type != 'text') return
      const text = firstParagraphChild.value
      const blockquoteClass = text
        .split(' ')[0]
        .trim()
        .toLowerCase()
      // add class to blockquote
      blockquote.data = {
        ...blockquote.data,
        hProperties: {
          ...blockquote.data?.hProperties,
          class: blockquoteClass
        }
      }
      // remove the class from the text
      firstParagraphChild.value = text.replace(
        blockquoteClass,
        ''
      )

      firstParagraph.data = {
        ...firstParagraph.data,
        hProperties: {
          ...firstParagraph.data?.hProperties,
          style: 'font-weight: bold;'
        }
      }
    })
  }
}
