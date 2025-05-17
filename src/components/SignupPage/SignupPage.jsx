import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navigation/Navbar'
import './SignupPage.css'

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="signup-page">
      <Navbar />
      <div className="signup-content">
        <h1>Create your account</h1>
        
        <form className="signup-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Full name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email address"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <div className="password-input">
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="form-input"
              />
              <button 
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="terms">
              <input type="checkbox" />
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </label>
          </div>

          <button type="submit" className="signup-button">
            Create account
          </button>

          <button type="button" className="google-button">
            <img src="/google-icon.png" alt="Google" />
            Or sign up with Google
          </button>

          <div className="login-prompt">
            Already have an account? 
            <Link to="/login" className="login-link">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPage