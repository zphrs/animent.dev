import { visit } from 'unist-util-visit'
import { toString as treeToString } from 'mdast-util-to-string'

export default function getHeadings() {
  return function transformer(tree, vFile) {
    vFile.data.headings = []

    visit(tree, 'heading', (node) => {
      // add id to heading
      const headingText = treeToString(node)
      const splitTitle = headingText.split(':')[1]
        ? headingText.split(':')[1]
        : headingText

      if (!node.data) {
        node.data = {}
      }
      if (!node.data.hProperties) {
        node.data.hProperties = {}
      }

      node.data.hProperties.id = splitTitle
        .trim()
        .split(/(\s|\/)+/)
        .map((word) => word.replace(/\W/g, ''))
        .filter((word) => word.length > 0)
        .join('-')
        .toLowerCase()

      const heading = {
        level: node.depth,
        title: headingText,
        id: node.data.hProperties.id
      }

      vFile.data.headings.push(heading)
    })

    if (!vFile.data.fm) vFile.data.fm = {}
    vFile.data.fm.headings = vFile.data.headings
  }
}
