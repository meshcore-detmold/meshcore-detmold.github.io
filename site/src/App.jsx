import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resources from './pages/Resources'
import Contributing from './pages/Contributing'
import WikiIndex from './pages/WikiIndex'
import WikiPage from './pages/WikiPage'

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contributing" element={<Contributing />} />
            <Route path="/wiki" element={<WikiIndex />} />
            <Route path="/wiki/:slug" element={<WikiPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
