import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="page-content">
      <section className="hero">
        <h1>Willkommen in der Meshcore Detmold Community</h1>
        <p>Community-Dokumentation, Sitzungsnotizen und Ressourcen zur Zusammenarbeit für Meshcore.</p>
      </section>

      <section className="cards">
        <article className="card">
          <div className="card-copy">
            <h2>Über uns</h2>
            <p>Erfahre mehr über die Mission und Ziele der Meshcore Detmold Community.</p>
          </div>
          <Link className="button" to="/about">Mehr erfahren</Link>
        </article>

        <article className="card">
          <div className="card-copy">
            <h2>Ressourcen</h2>
            <p>Finde Anleitungen, Tools und Lernmaterialien für Mesh-Netzwerke.</p>
          </div>
          <Link className="button" to="/resources">Ressourcen öffnen</Link>
        </article>

        <article className="card">
          <div className="card-copy">
            <h2>Mitwirken</h2>
            <p>Hilf dabei, die Community durch Dokumentation, Notizen und Ideen zu erweitern.</p>
          </div>
          <Link className="button" to="/contributing">Mitmachen</Link>
        </article>
      </section>
    </main>
  )
}
