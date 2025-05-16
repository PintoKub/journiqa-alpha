import { useState, useEffect } from 'react'
import Navbar from '../Navigation/Navbar'
import './MainPage.css'

function MainPage() {
  const [activeTab, setActiveTab] = useState('quick-trip')
  const [isEntering, setIsEntering] = useState(true)

  useEffect(() => {
    // Start with entering state
    setIsEntering(true)
    // Remove the entering state after component mounts
    const timer = setTimeout(() => {
      setIsEntering(false)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`main-page ${isEntering ? 'enter' : ''}`}>
      <Navbar />
      <div className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Explore the world.</h1>
          <h1 className="hero-title">Your way.</h1>
          <p className="hero-subtitle">
            Plan your perfect journey with Journiqa. Create personalized itineraries,
            discover hidden gems, and make unforgettable memories.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Start Planning</button>
          </div>
        </div>
        
        <div className="features-section">
          <div className="feature-tabs">
            <button 
              className={`tab-button ${activeTab === 'quick-trip' ? 'active' : ''}`}
              onClick={() => setActiveTab('quick-trip')}
            >
              Quick Trip
            </button>
            <button 
              className={`tab-button ${activeTab === 'planned-trip' ? 'active' : ''}`}
              onClick={() => setActiveTab('planned-trip')}
            >
              Planned Trip
            </button>
            <div className="tab-indicator" style={{
              transform: `translateX(${activeTab === 'quick-trip' ? '0' : '100%'})`
            }}></div>
          </div>

          <div className="tab-content">
            <div className={`tab-panel ${activeTab === 'quick-trip' ? 'active' : ''}`}>
              <div className="preview-grid">
                <div className="preview-card">
                  <div className="preview-image"></div>
                  <h3>Local Attractions</h3>
                  <p>Discover nearby hidden gems</p>
                </div>
                <div className="preview-card">
                  <div className="preview-image"></div>
                  <h3>Food & Drinks</h3>
                  <p>Best local cuisine spots</p>
                </div>
                <div className="preview-card">
                  <div className="preview-image"></div>
                  <h3>Activities</h3>
                  <p>Things to do today</p>
                </div>
              </div>
            </div>

            <div className={`tab-panel ${activeTab === 'planned-trip' ? 'active' : ''}`}>
              <div className="preview-grid">
                <div className="preview-card">
                  <div className="preview-image"></div>
                  <h3>Itinerary Builder</h3>
                  <p>Plan your perfect journey</p>
                </div>
                <div className="preview-card">
                  <div className="preview-image"></div>
                  <h3>Accommodations</h3>
                  <p>Find the best places to stay</p>
                </div>
                <div className="preview-card">
                  <div className="preview-image"></div>
                  <h3>Transportation</h3>
                  <p>Getting around made easy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage