import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Explore from './pages/Explore'
import Governance from './pages/Governance'
import Learn from './pages/Learn'
import GetHelp from './pages/GetHelp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/get-help" element={<GetHelp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
