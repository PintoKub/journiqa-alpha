import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll listener
  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY > 20)
  })

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <Link to="/" className="nav-logo">Journiqa</Link>
        <div className="nav-links">
          <Link to="/quick-trip">Quick Trip</Link>
          <Link to="/plan-trip">Plan Trip</Link>
          <Link to="/my-trip">My Trip</Link>
        </div>
        <div className="nav-login">
          <button className="login-button">Login</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar