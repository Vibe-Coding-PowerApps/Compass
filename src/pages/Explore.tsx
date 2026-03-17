import React from 'react'
import { Link } from 'react-router-dom'
import './PageBase.css'

export default function Explore() {
  return (
    <div className="page-base">
      <header className="page-header">
        <Link to="/">← Home</Link>
        <h2>Explore</h2>
      </header>
      <main>
        <p>Explore content placeholder.</p>
      </main>
    </div>
  )
}
