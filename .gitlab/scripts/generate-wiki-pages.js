#!/usr/bin/env node

/**
 * Generate wikiPages.js from available Markdown files in site/public/docs
 * This scans the docs folder and creates metadata for wiki pages
 */

const fs = require('fs')
const path = require('path')

const sourcePath = process.argv[2] || path.join(__dirname, '../../site/public/docs')
const docsDir = path.resolve(sourcePath)

// List of files to skip
const skipFiles = ['favicon.png', 'style.css', 'Home.md', 'Home.markdown', 'index.md', 'index.markdown']

// Read available markdown files
const files = fs.existsSync(docsDir)
  ? fs.readdirSync(docsDir).filter((file) => {
      const lower = file.toLowerCase()
      return (
        (lower.endsWith('.md') || lower.endsWith('.markdown')) &&
        !skipFiles.map((skip) => skip.toLowerCase()).includes(lower)
      )
    })
  : []

// Map files to page metadata
const wikiPages = files.map((file) => {
  const slug = file.replace('.md', '')
  let title = slug.charAt(0).toUpperCase() + slug.slice(1)
  let description = `Wiki page: ${title}`
  
  try {
    const content = fs.readFileSync(path.join(docsDir, file), 'utf-8')
    
    // Extract title from first h1 heading
    const h1Match = content.match(/^# (.+)$/m)
    if (h1Match) {
      title = h1Match[1].trim()
    }
    
    // Extract description from first non-heading paragraph
    const lines = content.split('\n')
    for (const line of lines) {
      const trimmed = line.trim()
      // Skip empty lines, headings, and code blocks
      if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('```')) {
        description = trimmed.substring(0, 120)
        break
      }
    }
  } catch (e) {
    console.warn(`Warning: Could not read ${file}:`, e.message)
  }
  
  return {
    slug,
    title,
    description,
  }
})

// Sort alphabetically by slug
wikiPages.sort((a, b) => a.slug.localeCompare(b.slug))

// Generate JavaScript code
const jsCode = `const wikiPages = ${JSON.stringify(wikiPages, null, 2)}

export default wikiPages
`

// Write to file
const outputPath = path.join(__dirname, '../../site/src/wikiPages.js')
fs.writeFileSync(outputPath, jsCode, 'utf-8')

console.log(`Generated wikiPages.js with ${wikiPages.length} pages`)
console.log('Pages:', wikiPages.map((p) => p.slug).join(', '))
