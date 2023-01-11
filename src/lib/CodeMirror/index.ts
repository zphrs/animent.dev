import theme from './theme'
import type { Extension } from '@codemirror/state'
import highlightStyle from './highlightStyle'
import { syntaxHighlighting } from '@codemirror/language'

export const forestCottageTheme: Extension = [
  theme,
  syntaxHighlighting(highlightStyle)
]
