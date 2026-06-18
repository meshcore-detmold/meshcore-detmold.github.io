import React from 'react'
import { Link } from 'react-router-dom'
import wikiPages from '../wikiPages'

const MAX_CARD_ITEMS = 4
const fixedCards = [
  {
    title: 'Über uns',
    description: 'Erfahre mehr über die Mission und Ziele der Meshcore Detmold Community.',
    to: '/about',
  },
  {
    title: 'Ressourcen',
    description: 'Finde Anleitungen, Tools und Lernmaterialien für Mesh-Netzwerke.',
    to: '/resources',
  },
  {
    title: 'Mitwirken',
    description: 'Hilf dabei, die Community durch Dokumentation, Notizen und Ideen zu erweitern.',
    to: '/contributing',
  },
]
const fixedSlugs = ['about', 'resources', 'contributing']

export default function Home() {
  const extraPages = wikiPages.filter((page) => !fixedSlugs.includes(page.slug))
  const allCards = [
    ...fixedCards,
    ...extraPages.map((page) => ({
      title: page.title,
      description: page.description,
      to: `/wiki/${page.slug}`,
      key: page.slug,
    })),
  ]
  const visibleCards = allCards.slice(0, MAX_CARD_ITEMS)
  const hasOverflow = allCards.length > MAX_CARD_ITEMS

  return (
    <main className="page-content">
      <section className="hero">
        <h1>Willkommen in der Meshcore Detmold Community</h1>
        <p>Community-Dokumentation, Sitzungsnotizen und Ressourcen zur Zusammenarbeit für Meshcore.</p>
      </section>

      <section className="cards">
        {visibleCards.map((card, index) => (
          <article className="card" key={card.key || index}>
            <div className="card-copy">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
            <Link className="button" to={card.to}>
              {card.to.startsWith('/wiki/') ? 'Seite öffnen' : 'Mehr erfahren'}
            </Link>
          </article>
        ))}

        {hasOverflow && (
          <article className="card overflow-card">
            <div className="card-copy">
              <h2>Weitere Seiten</h2>
              <p>Es gibt noch weitere Wiki-Seiten auf Root-Level. Hier führt dich die Übersicht zu allen verfügbaren Seiten.</p>
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
