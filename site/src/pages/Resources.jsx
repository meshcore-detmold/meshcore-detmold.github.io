import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Resources() {
  const [markdown, setMarkdown] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/docs/resources.md')
      .then(r => r.ok ? r.text() : Promise.reject('not found'))
      .then(text => {
        setMarkdown(text)
        setLoading(false)
      })
      .catch(() => {
        setMarkdown('')
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Lädt...</div>
  return <article className="page-content markdown-content"><ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown || ''}</ReactMarkdown></article>
}
