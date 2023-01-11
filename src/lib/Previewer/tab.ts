type Tab = {
  title: string
  id: string
  selected: boolean
  index: number
}
type FileTab = Tab & {
  path: string
  relativePath: string
  content: string
  lang: string
}
export type { Tab, FileTab }
