import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Add scroll listener
  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY > 20)
  })

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <Link to="/" className="nav-logo">Journiqa</Link>
        <div className="menu-container">
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          {isMenuOpen && (
            <div className="dropdown-menu">
              <Link to="/login" className="dropdown-item">Login</Link>
              <Link to="/myaccount" className="dropdown-item">My Account</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar