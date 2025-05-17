import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navigation/Navbar'
import './MainPage.css'

function MainPage() {
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const navigate = useNavigate()

  const cards = [
    {
      image: "/mascot-planning.png",
      title: "Smart Planning",
      description: "You don't have to stress about finding places to visit anymore because AI system can plan it for you."
    },
    {
      image: "/mascot-enjoyable.png",
      title: "Enjoyable",
      description: "Discover a new experience in traveling with a mini-game system that will keep you when developing your trip."
    },
    {
      image: "/mascot-sharing.png",
      title: "Sharing",
      description: "Have fun recording your stories through the Trip Lookbook system and share them with your friends via Journiqa or social media."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCardIndex((current) => (current + 1) % cards.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handleBeginJourney = () => {
    navigate('/select-mode')
  }

  return (
    <div className="main-page">
      <Navbar />
      <div className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <div className="mascot-container">
              <img src="/mascot-binoculars.png" alt="Journiqa Mascot" className="mascot-image" />
            </div>
            <h1 className="hero-title">READY SET GO</h1>
            <p className="hero-subtitle">
              New Experience<br />
              make your unique trip<br />
              Journiqa
            </p>
            <button className="begin-button" onClick={handleBeginJourney}>Begin Journey!</button>
          </div>
        </div>

        <div className="features-section">
          <h2>Travel with Journiqa</h2>
          <div className="feature-cards">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className={`feature-card ${index === activeCardIndex ? 'active' : ''}`}
              >
                <img src={card.image} alt={card.title} />
                <div className="feature-text">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage