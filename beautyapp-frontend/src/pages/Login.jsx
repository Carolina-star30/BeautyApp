import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [parola, setParola] = useState('')
  const [showParola, setShowParola] = useState(false)
  const [loading, setLoading] = useState(false)
  const [eroare, setEroare] = useState('')

  const handleLogin = () => {
    if (email && parola) {
      setLoading(true)
      setEroare('')
      const rol = login(email, parola)
      setTimeout(() => {
        if (rol === 'admin') {
          navigate('/dashboard')
        } else if (rol === 'angajat') {
          navigate('/portal')
        } else {
          setLoading(false)
          setEroare('Email sau parola incorecta!')
        }
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen flex" style={{background: 'linear-gradient(135deg, #fff0f3 0%, #ffcad4 50%, #f4a0b0 100%)'}}>
      
      <div className="hidden lg:flex flex-1 flex-col items-center justify-center p-12">
        <img src={logo} alt="BeautyApp" className="w-48 mb-8 drop-shadow-xl" />
        <h1 className="text-4xl font-bold text-center mb-4" style={{color: '#3d1f28'}}>
          BeautyApp
        </h1>
        <p className="text-center text-lg max-w-sm" style={{color: '#7a5c63'}}>
          Platforma completa de management HR pentru salonul tau de infrumusetare
        </p>
        <div className="flex gap-6 mt-10">
          {['Angajati', 'Salarizare', 'Concedii', 'Candidati'].map(item => (
            <div key={item} className="text-center">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2 mx-auto"
                style={{backgroundColor: 'rgba(255,255,255,0.6)'}}>
                <span className="text-xl">✨</span>
              </div>
              <p className="text-xs font-medium" style={{color: '#3d1f28'}}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl p-10 w-full max-w-md"
          style={{boxShadow: '0 20px 60px rgba(201, 116, 138, 0.2)'}}>
          
          <div className="flex justify-center mb-8 lg:hidden">
            <img src={logo} alt="BeautyApp" className="w-24" />
          </div>

          <h2 className="text-2xl font-bold mb-2" style={{color: '#3d1f28'}}>
            Bun venit!
          </h2>
          <p className="text-sm mb-8" style={{color: '#7a5c63'}}>
            Conecteaza-te la contul tau BeautyApp
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-medium mb-2 block" style={{color: '#7a5c63'}}>
                Email
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2" 
                  style={{color: '#c9748a'}} />
                <input
                  type="email"
                  placeholder="admin@salon.ro"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl pl-11 pr-4 py-3 text-sm outline-none"
                  style={{border: '1.5px solid #ffcad4', color: '#3d1f28'}}
                  onFocus={e => e.target.style.borderColor = '#c9748a'}
                  onBlur={e => e.target.style.borderColor = '#ffcad4'}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium mb-2 block" style={{color: '#7a5c63'}}>
                Parola
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2"
                  style={{color: '#c9748a'}} />
                <input
                  type={showParola ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={parola}
                  onChange={(e) => setParola(e.target.value)}
                  className="w-full rounded-xl pl-11 pr-11 py-3 text-sm outline-none"
                  style={{border: '1.5px solid #ffcad4', color: '#3d1f28'}}
                  onFocus={e => e.target.style.borderColor = '#c9748a'}
                  onBlur={e => e.target.style.borderColor = '#ffcad4'}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                />
                <button
                  onClick={() => setShowParola(!showParola)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{color: '#c9748a'}}
                >
                  {showParola ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {eroare && (
              <p className="text-xs text-center py-2 px-4 rounded-xl"
                style={{backgroundColor: '#fdebd0', color: '#d35400'}}>
                {eroare}
              </p>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="rounded-xl py-3 font-semibold text-white mt-2"
              style={{
                background: loading 
                  ? '#e8889a' 
                  : 'linear-gradient(135deg, #c9748a 0%, #a85570 100%)',
                boxShadow: '0 8px 20px rgba(201, 116, 138, 0.4)'
              }}
            >
              {loading ? 'Se conecteaza...' : 'Conectare'}
            </button>

            <div className="mt-2 p-3 rounded-xl text-xs" style={{backgroundColor: '#fff8f9', color: '#7a5c63'}}>
              <p className="font-medium mb-1" style={{color: '#3d1f28'}}>Conturi de test:</p>
              <p>👔 Admin: admin@salon.ro / admin123</p>
              <p>👤 Angajat: ana@salon.ro / ana123</p>
            </div>
          </div>

          <p className="text-center text-xs mt-6" style={{color: '#7a5c63'}}>
            BeautyApp v1.0 — Platforma HR pentru saloane
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login