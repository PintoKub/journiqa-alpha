import { useNavigate } from 'react-router-dom'
import './ModeSelection.css'

function ModeSelection({ onClose }) {
  const navigate = useNavigate()

  return (
    <div className="mode-selection-overlay" onClick={onClose}>
      <div className="mode-selection-container" onClick={e => e.stopPropagation()}>
        <h2>Choose Your Journey</h2>
        
        <div className="mode-cards">
          <div 
            className="mode-card"
            onClick={() => navigate('/trip-planner')}
          >
            <img src="/mascot-planning.png" alt="Trip Planner" />
            <h3>Trip Planner</h3>
            <p>Plan your perfect trip with detailed preferences</p>
          </div>

          <div 
            className="mode-card"
            onClick={() => navigate('/quick-trip')}
          >
            <img src="/mascot-enjoyable.png" alt="Quick Trip" />
            <h3>Quick Trip</h3>
            <p>Discover nearby places within 5km</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModeSelection