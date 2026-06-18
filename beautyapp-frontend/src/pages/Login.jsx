import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [parola, setParola] = useState('')

  const handleLogin = () => {
    if (email && parola) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#fff0f3'}}>
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
        
        <div className="flex justify-center mb-6">
          <img src={logo} alt="BeautyApp" className="w-32" />
        </div>

        <h1 className="text-2xl font-bold text-center mb-2" style={{color: '#c9748a'}}>
          Bun venit!
        </h1>
        <p className="text-center mb-8 text-sm" style={{color: '#7a5c63'}}>
          Conecteaza-te la contul tau BeautyApp
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl px-4 py-3 text-sm outline-none"
            style={{border: '1px solid #ffcad4'}}
          />
          <input
            type="password"
            placeholder="Parola"
            value={parola}
            onChange={(e) => setParola(e.target.value)}
            className="rounded-xl px-4 py-3 text-sm outline-none"
            style={{border: '1px solid #ffcad4'}}
          />
          <button
            onClick={handleLogin}
            className="rounded-xl py-3 font-semibold text-white transition-all"
            style={{backgroundColor: '#c9748a'}}
          >
            Conectare
          </button>
        </div>

      </div>
    </div>
  )
}

export default Login