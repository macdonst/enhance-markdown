import { readFileSync } from 'fs'
import { URL } from 'url'
import { Arcdown } from 'arcdown'
const arcdown = new Arcdown()

export async function get (req) {
  // Get requested path
  const { path: activePath } = req
  let docPath = activePath.replace(/^\/?docs\//, '') || 'index'
  if (docPath.endsWith('/')) {
    docPath += 'index' // trailing slash == index.md file
  }

  // Read markdown file
  const docURL = new URL(`../../${docPath}.md`, import.meta.url)
  let docMarkdown = readFileSync(docURL.pathname, 'utf-8')

  // Convert to HTML and add to store
  const doc = await arcdown.render(docMarkdown)
  return {
    json: { doc }
  }
}
