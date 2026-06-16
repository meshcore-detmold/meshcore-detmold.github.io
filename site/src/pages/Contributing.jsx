import React, { useEffect, useState } from 'react'

export default function Contributing() {
  const [html, setHtml] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/docs/contributing.html')
      .then(r => r.ok ? r.text() : Promise.reject('not found'))
      .then(text => {
        try {
          const parser = new DOMParser()
          const doc = parser.parseFromString(text, 'text/html')
          
          // Extract main content without header/footer
          const main = doc.querySelector('main')
          if (main) {
            setHtml(main.innerHTML)
          } else {
            setHtml('<p>Inhalt nicht gefunden</p>')
          }
        } catch (e) {
          setHtml('<p>Fehler beim Laden des Inhalts</p>')
        }
        setLoading(false)
      })
      .catch(() => {
        setHtml('<p>Seite nicht gefunden</p>')
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Lädt...</div>
  return <article className="page-content" dangerouslySetInnerHTML={{__html: html}} />
}
