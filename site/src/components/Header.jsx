import React from 'react'
import { Link } from 'react-router-dom'
import wikiPages from '../wikiPages'

const MAX_NAV_ITEMS = 4
const fixedNavItems = [
  { label: 'Start', to: '/' },
  { label: 'Über uns', to: '/about' },
  { label: 'Ressourcen', to: '/resources' },
  { label: 'Mitwirken', to: '/contributing' },
]
const fixedSlugs = fixedNavItems
  .filter((item) => item.to.startsWith('/wiki/'))
  .map((item) => item.to.replace('/wiki/', ''))

export default function Header() {
  const extraNavItems = wikiPages
    .filter((page) => !fixedSlugs.includes(page.slug))
    .map((page) => ({ label: page.title, to: `/wiki/${page.slug}` }))

  const navItems = [...fixedNavItems, ...extraNavItems]
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
