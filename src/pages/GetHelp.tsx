import React from 'react'
import { Link } from 'react-router-dom'
import './PageBase.css'

export default function GetHelp() {
  return (
    <div className="page-base">
      <header className="page-header">
        <Link to="/">← Home</Link>
        <h2>Get Help</h2>
      </header>
      <main>
        <p>Get help content placeholder.</p>
      </main>
    </div>
  )
}
