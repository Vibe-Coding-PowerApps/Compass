import React, { useState } from 'react'
import '../pages/Landing.css'
// Load the illustration from the public folder at runtime
import { Link } from 'react-router-dom'

export default function Landing() {
  const [open, setOpen] = useState(false)

  return (
    <div className="app-shell">
      <div className="landing-root">
        <div className="landing-hero">
        <header className="nav">
          <div className="brand">
            <img src="/compass.png" alt="Compass logo" className="brand-logo" />
            <span>Compass</span>
          </div>
          <button className="hamburger" onClick={() => setOpen((s) => !s)} aria-label="menu">☰</button>
          <nav className={`nav-links ${open ? 'open' : ''}`}>
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/explore" className="nav-link">Explore</Link>
            <Link to="/governance" className="nav-link">Governance</Link>
            <Link to="/learn" className="nav-link">Learn</Link>
            <Link to="/get-help" className="nav-link">Get Help</Link>
            <div className="nav-selector">
              <div className="nav-selector-bar" />
            </div>
          </nav>
        </header>

        <div className="hero-content">
          <div className="hero-copy">
            <h1 className="hero-title">Compass</h1>
            <p className="hero-sub">
              Compass is your organization&apos;s guiding light, helping both<br/>
              customers and employees navigate seamlessly through the vast<br/>
              landscape of processes, available resources, and much more.<br/>
              With Compass, clarity and direction are at your fingertips, ensuring<br/>
              everyone finds the right path within your organization.
            </p>
            <div className="hero-cta">
              <Link to="/explore" className="btn-primary">Explore</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <img src="/map-illustration.png" alt="Map illustration" className="map-illustration" />
          
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
