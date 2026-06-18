import React from 'react'
import { Link } from 'react-router-dom'
import wikiPages from '../wikiPages'

export default function WikiIndex() {
  return (
    <main className="page-content">
      <section className="hero">
        <h1>Wiki-Seiten</h1>
        <p>Hier findest du die verfügbaren Seiten aus dem Repo-Wiki. Wähle eine Seite aus, um mehr zu lesen.</p>
      </section>

      <section className="cards">
        {wikiPages.map(page => (
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
      </section>
    </main>
  )
}
