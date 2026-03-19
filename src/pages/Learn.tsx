import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PageBase.css'
import './Landing.css'

export default function Learn() {
  const [open, setOpen] = useState(false)
  const navLinksRef = useRef<HTMLDivElement | null>(null)
  const selectorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function positionSelector() {
      const nav = navLinksRef.current
      const selector = selectorRef.current
      if (!nav || !selector) return
      const active = nav.querySelector('.nav-link.active') as HTMLElement | null
      if (!active) return
      const left = active.offsetLeft
      const width = active.offsetWidth
      selector.style.left = `${left}px`
      selector.style.width = `${width}px`
    }

    positionSelector()
    window.addEventListener('resize', positionSelector)
    return () => window.removeEventListener('resize', positionSelector)
  }, [open])

  return (
    <div className="page-base learn-page" style={{position: 'relative', overflow: 'visible'}}>
      {/* Background layers */}
      <div style={{position: 'absolute', left: 0, top: 0, width: '100%', height: 2758, zIndex: 0,
        background: 'radial-gradient(ellipse 74.39% 98.93% at 5.94% 14.84%, rgba(146, 239, 252, 0.60) 0%, rgba(208, 195, 239, 0.60) 100%), linear-gradient(41deg, #E2AAFC 0%, #AFC3F6 100%)', pointerEvents: 'none'}} />
      <div style={{position: 'absolute', left: '50%', top: 50, width: 1328, height: 2658, zIndex: 1,
        background: 'rgba(255, 255, 255, 0.30)', borderRadius: 24, backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', pointerEvents: 'none', transform: 'translateX(-50%)'}} />
      {/* Main content (normal flow, scrollable) */}
      <header className="nav" style={{position: 'relative', zIndex: 2}}>
        <div className="brand">
          <img src="/compass.png" alt="Compass logo" className="brand-logo" />
          <span>Compass</span>
        </div>
        <button className="hamburger" onClick={() => setOpen((s) => !s)} aria-label="menu">☰</button>
        <nav ref={navLinksRef} className={`nav-links ${open ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/explore" className="nav-link">Explore</Link>
          <Link to="/governance" className="nav-link">Governance</Link>
          <Link to="/learn" className="nav-link active">Learn</Link>
          <Link to="/get-help" className="nav-link">Get Help</Link>
          <div className="nav-selector">
            <div ref={selectorRef} className="nav-selector-bar" />
          </div>
        </nav>
      </header>
      {/* Add your page content here, below the header */}
    </div>
  )
}
