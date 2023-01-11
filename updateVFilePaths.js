export default function updateVFilePaths() {
  return async function transformer(tree, vFile) {
    vFile.path = vFile.filename
  }
}
