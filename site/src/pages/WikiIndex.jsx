import React from 'react'
import { Link } from 'react-router-dom'
import wikiPages from '../wikiPages'

const fixedSlugs = ['about', 'resources', 'contributing']

export default function WikiIndex() {
  const extraPages = wikiPages.filter((page) => !fixedSlugs.includes(page.slug))

  return (
    <main className="page-content">
      <section className="hero">
        <h1>Wiki-Seiten</h1>
        <p>Hier findest du die verfügbaren Wiki-Seiten. Wähle eine Seite aus, um mehr zu lesen.</p>
      </section>

      <section className="cards">
        {extraPages.length === 0 ? (
          <article className="card">
            <div className="card-copy">
              <h2>Keine zusätzlichen Wiki-Seiten gefunden</h2>
              <p>Aktuell sind keine weiteren Wiki-Seiten auf Root-Level verfügbar.</p>
            </div>
          </article>
        ) : (
          extraPages.map((page) => (
            <article className="card" key={page.slug}>
              <div className="card-copy">
                <h2>{page.title}</h2>
                <p>{page.description}</p>
              </div>
              <Link className="button" to={`/wiki/${page.slug}`}>
                Seite öffnen
              </Link>
            </article>
          ))
        )}
      </section>
    </main>
  )
}
