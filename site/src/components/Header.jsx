import React from 'react'
import { Link } from 'react-router-dom'
import wikiPages from '../wikiPages'

const MAX_NAV_ITEMS = 4

export default function Header() {
  const navItems = [
    { label: 'Start', to: '/' },
    ...wikiPages.map((page) => ({ label: page.title, to: `/wiki/${page.slug}` })),
  ]

  const visibleItems = navItems.slice(0, MAX_NAV_ITEMS)
  const overflowItems = navItems.slice(MAX_NAV_ITEMS)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand">Meshcore Detmold</div>
        <nav className="nav-links" aria-label="Hauptnavigation">
          {visibleItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}

          {overflowItems.length > 0 && (
            <div className="nav-dropdown">
              <button type="button" className="nav-dropdown__trigger">
                Mehr
              </button>
              <div className="nav-dropdown__menu" role="menu">
                {overflowItems.map((item) => (
                  <Link key={item.to} to={item.to} role="menuitem">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
