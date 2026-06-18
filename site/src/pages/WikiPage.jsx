import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import wikiPages from '../wikiPages'

const getPageUrl = (slug) => `${import.meta.env.BASE_URL || '/'}docs/${slug}.md`

export default function WikiPage() {
  const { slug } = useParams()
  const [markdown, setMarkdown] = useState(null)
  const [loading, setLoading] = useState(true)
  const page = wikiPages.find((item) => item.slug === slug)

  useEffect(() => {
    if (!page) {
      setMarkdown(null)
      setLoading(false)
      return
    }

    fetch(getPageUrl(page.slug))
      .then((response) => (response.ok ? response.text() : Promise.reject('not found')))
      .then((text) => {
        setMarkdown(text)
      })
      .catch(() => {
        setMarkdown('')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page])

  if (loading) return <div>Lädt...</div>

  if (!page) {
    return (
      <main className="page-content">
        <section className="hero">
          <h1>Seite nicht gefunden</h1>
          <p>Die angeforderte Wiki-Seite existiert nicht oder wurde nicht gefunden.</p>
        </section>
      </main>
    )
  }

  return (
    <article className="page-content markdown-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown || ''}</ReactMarkdown>
    </article>
  )
}
