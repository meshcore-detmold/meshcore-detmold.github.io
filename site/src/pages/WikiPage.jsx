import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const getPageUrl = (slug) => `${import.meta.env.BASE_URL || '/'}docs/${slug}.md`

export default function WikiPage() {
  const { slug } = useParams()
  const [markdown, setMarkdown] = useState(null)
  const [loading, setLoading] = useState(true)
  const [exists, setExists] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(getPageUrl(slug))
      .then((response) => {
        if (!response.ok) {
          setExists(false)
          throw new Error('not found')
        }
        return response.text()
      })
      .then((text) => {
        setMarkdown(text)
        setExists(true)
      })
      .catch(() => {
        setMarkdown('')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [slug])

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
