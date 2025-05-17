import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navigation/Navbar'
import './LoginPage.css'

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-content">
        <h1>Sign In for new experiences</h1>
        
        <form className="login-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Email or phone number"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <div className="password-input">
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
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
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="sign-in-button">
            Sign in
          </button>

          <button type="button" className="google-button">
            <img src="/google-icon.png" alt="Google" />
            Or sign in with Google
          </button>

          <div className="signup-prompt">
            Don't have an account? 
            <Link to="/signup" className="signup-link">
              Sign up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage