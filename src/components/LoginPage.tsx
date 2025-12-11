import React, { useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function LoginPage({ onLogin }: { onLogin: (name: string) => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registrationMode, setRegistrationMode] = useState(false)
  const navigate = useNavigate()

  function goToLoggedIn() {
    if (email.trim() && password.trim()) {
      onLogin('Harry Potter') // preserve original display name
    }
  }

  return (
    <div id="page-login">
      <Header />
      <div className="login-container">
        <h2>Login</h2>

        <div className="login-label">Email</div>
        <input id="email" type="email" className="login-input" placeholder="Input text" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <div className="login-label">Password</div>
        <input id="password" type="password" className="login-input" placeholder="Input text" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:18}}>
          <input type="checkbox" id="registrationCheckbox" checked={registrationMode} onChange={(e)=>setRegistrationMode(e.target.checked)} />
          <label htmlFor="registrationCheckbox">Registration</label>
        </div>

        <button className="btn" id="loginButton" onClick={goToLoggedIn}>{registrationMode ? 'Register' : 'LOGIN'}</button>
        <div className="login-bottom" style={{marginTop:12}}>
          If you don't have an account you may<br />
          <b style={{cursor:'pointer'}} onClick={()=>navigate('/register')}>Registration</b>
        </div>
      </div>
    </div>
  )
}
