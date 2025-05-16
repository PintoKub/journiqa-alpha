import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  const navigate = useNavigate()

  useEffect(() => {
    // Automatically navigate after 2 seconds
    const timer = setTimeout(() => {
      navigate('/main')
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="landing-container">
      <h1 className="logo-text">Journiqa</h1>
    </div>
  )
}

export default LandingPage