import React from 'react'
import { Link } from 'react-router-dom'
import './PageBase.css'

export default function Governance() {
  return (
    <div className="page-base">
      <header className="page-header">
        <Link to="/">← Home</Link>
        <h2>Governance</h2>
      </header>
      <main>
        <p>Governance content placeholder.</p>
      </main>
    </div>
  )
}
