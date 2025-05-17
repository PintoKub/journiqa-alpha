import { useNavigate } from 'react-router-dom'
import './ModeSelection.css'

function ModeSelection() {
  const navigate = useNavigate()

  return (
    <div className="mode-selection-overlay">
      <div className="mode-selection-container">
        <h2>Choose Your Journey Mode</h2>
        
        <div className="mode-cards">
          <div 
            className="mode-card"
            onClick={() => navigate('/trip-planner')}
          >
            <img src="/mascot-planning.png" alt="Trip Planner" />
            <h3>Trip Planner</h3>
            <p>Plan your perfect trip with detailed preferences for dates, interests, and budget</p>
          </div>

          <div 
            className="mode-card"
            onClick={() => navigate('/quick-trip')}
          >
            <img src="/mascot-enjoyable.png" alt="Quick Trip" />
            <h3>Quick Trip</h3>
            <p>Discover exciting nearby places within 5km based on your budget</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModeSelection