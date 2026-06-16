import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand">Meshcore Detmold</div>
        <nav className="nav-links" aria-label="Hauptnavigation">
          <Link to="/">Start</Link>
          <Link to="/about">Über uns</Link>
          <Link to="/resources">Ressourcen</Link>
          <Link to="/contributing">Mitwirken</Link>
        </nav>
      </div>
    </header>
  )
}
