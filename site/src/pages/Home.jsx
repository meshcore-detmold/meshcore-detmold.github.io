import React from 'react'
import { Link } from 'react-router-dom'
import wikiPages from '../wikiPages'

const MAX_CARD_ITEMS = 4

export default function Home() {
  const visiblePages = wikiPages.slice(0, MAX_CARD_ITEMS)
  const hasOverflow = wikiPages.length > MAX_CARD_ITEMS

  return (
    <main className="page-content">
      <section className="hero">
        <h1>Willkommen in der Meshcore Detmold Community</h1>
        <p>Community-Dokumentation, Sitzungsnotizen und Ressourcen zur Zusammenarbeit für Meshcore.</p>
      </section>

      <section className="cards">
        {visiblePages.map((page) => (
          <article className="card" key={page.slug}>
            <div className="card-copy">
              <h2>{page.title}</h2>
              <p>{page.description}</p>
            </div>
            <Link className="button" to={`/wiki/${page.slug}`}>
              Seite öffnen
            </Link>
          </article>
        ))}

        {hasOverflow && (
          <article className="card overflow-card">
            <div className="card-copy">
              <h2>Weitere Wiki-Seiten</h2>
              <p>Es gibt noch weitere Seiten in der Repo-Dokumentation. Hier gelangst du zur vollständigen Übersicht.</p>
            </div>
            <Link className="button" to="/wiki">
              Mehr sehen
            </Link>
          </article>
        )}
      </section>
    </main>
  )
}
