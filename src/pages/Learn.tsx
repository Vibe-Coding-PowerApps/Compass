import React from 'react'
import { Link } from 'react-router-dom'
import './PageBase.css'

export default function Learn() {
  return (
    <div className="page-base">
      <header className="page-header">
        <Link to="/">← Home</Link>
        <h2>Learn</h2>
      </header>
      <main>
        <p>Learn content placeholder.</p>
      </main>
    </div>
  )
}
