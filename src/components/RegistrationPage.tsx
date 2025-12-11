import React, { useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function RegistrationPage({ onRegister }: { onRegister: (name: string) => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function register() {
    if (name.trim()) {
      onRegister(name)
    }
  }

  return (
    <div id="page-registration">
      <Header />
      <div className="login-container">
        <h2>Registration</h2>

        <div className="login-label">Name</div>
        <input type="text" className="login-input" placeholder="Input text" value={name} onChange={(e)=>setName(e.target.value)} />

        <div className="login-label">Email</div>
        <input type="email" className="login-input" placeholder="Input text" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <div className="login-label">Password</div>
        <input type="password" className="login-input" placeholder="Input text" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button className="btn" onClick={register}>LOGIN</button>

        <div className="login-bottom">
          If you have an account you may <b style={{cursor:'pointer'}} onClick={()=>navigate('/login')}>Login</b>
        </div>
      </div>
    </div>
  )
}
