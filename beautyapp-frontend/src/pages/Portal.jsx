import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogOut, Calendar, DollarSign, Clock, User } from 'lucide-react'
import logo from '../assets/logo.png'

function Portal() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const fluturasi = [
    { luna: 'Iunie 2026', brut: 3720, net: 2176, status: 'disponibil' },
    { luna: 'Mai 2026', brut: 3500, net: 2048, status: 'disponibil' },
    { luna: 'Aprilie 2026', brut: 3200, net: 1872, status: 'disponibil' },
  ]

  const concedii = [
    { tip: 'Odihna', start: '2026-07-01', sfarsit: '2026-07-07', zile: 6, status: 'in asteptare' },
    { tip: 'Medical', start: '2026-05-10', sfarsit: '2026-05-12', zile: 2, status: 'aprobat' },
  ]

  return (
    <div className="min-h-screen" style={{backgroundColor: '#fff8f9'}}>

      {/* Header */}
      <div className="px-8 py-5 flex justify-between items-center"
        style={{background: 'linear-gradient(135deg, #ffcad4 0%, #f4a0b0 100%)'}}>
        <div className="flex items-center gap-4">
          <img src={logo} alt="BeautyApp" className="w-12" />
          <div>
            <h1 className="font-bold text-lg" style={{color: '#3d1f28'}}>BeautyApp</h1>
            <p className="text-xs" style={{color: '#7a5c63'}}>Portal Angajat</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-medium text-sm" style={{color: '#3d1f28'}}>{user?.nume}</p>
            <p className="text-xs" style={{color: '#7a5c63'}}>{user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
            style={{backgroundColor: 'rgba(255,255,255,0.6)', color: '#3d1f28'}}
          >
            <LogOut size={16} />
            Iesire
          </button>
        </div>
      </div>

      <div className="p-8">
        {/* Bun venit */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold" style={{color: '#3d1f28'}}>
            Buna ziua, {user?.nume}! 👋
          </h2>
          <p className="text-sm mt-1" style={{color: '#7a5c63'}}>
            {new Date().toLocaleDateString('ro-RO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Carduri rapide */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl" style={{backgroundColor: '#fff0f3'}}>
                <Calendar size={20} style={{color: '#c9748a'}} />
              </div>
              <p className="font-medium" style={{color: '#3d1f28'}}>Sold concediu</p>
            </div>
            <p className="text-3xl font-bold" style={{color: '#c9748a'}}>18</p>
            <p className="text-xs mt-1" style={{color: '#7a5c63'}}>zile disponibile</p>
          </div>

          <div className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl" style={{backgroundColor: '#d5f5e3'}}>
                <DollarSign size={20} style={{color: '#1e8449'}} />
              </div>
              <p className="font-medium" style={{color: '#3d1f28'}}>Salariu net</p>
            </div>
            <p className="text-3xl font-bold" style={{color: '#1e8449'}}>2.176</p>
            <p className="text-xs mt-1" style={{color: '#7a5c63'}}>RON — Iunie 2026</p>
          </div>

          <div className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl" style={{backgroundColor: '#d6eaf8'}}>
                <Clock size={20} style={{color: '#2471a3'}} />
              </div>
              <p className="font-medium" style={{color: '#3d1f28'}}>Ore luna aceasta</p>
            </div>
            <p className="text-3xl font-bold" style={{color: '#2471a3'}}>142</p>
            <p className="text-xs mt-1" style={{color: '#7a5c63'}}>din 160 ore normale</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">

          {/* Fluturasi */}
          <div className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}>
            <div className="flex items-center gap-2 mb-6">
              <DollarSign size={20} style={{color: '#c9748a'}} />
              <h3 className="font-bold text-lg" style={{color: '#3d1f28'}}>Fluturasi salariu</h3>
            </div>
            <div className="flex flex-col gap-3">
              {fluturasi.map((f, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-xl"
                  style={{backgroundColor: '#fff8f9'}}>
                  <div>
                    <p className="font-medium text-sm" style={{color: '#3d1f28'}}>{f.luna}</p>
                    <p className="text-xs mt-0.5" style={{color: '#7a5c63'}}>
                      Brut: {f.brut} RON → Net: <span style={{color: '#c9748a', fontWeight: '600'}}>{f.net} RON</span>
                    </p>
                  </div>
                  <button
                    className="text-xs px-3 py-1.5 rounded-xl font-medium"
                    style={{backgroundColor: '#fff0f3', color: '#c9748a'}}
                  >
                    Descarca
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Concedii */}
          <div className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={20} style={{color: '#c9748a'}} />
                <h3 className="font-bold text-lg" style={{color: '#3d1f28'}}>Concediile mele</h3>
              </div>
              <button
                className="text-xs px-3 py-1.5 rounded-xl font-medium text-white"
                style={{background: 'linear-gradient(135deg, #c9748a, #a85570)'}}
              >
                + Cerere noua
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {concedii.map((c, i) => (
                <div key={i} className="p-4 rounded-xl" style={{backgroundColor: '#fff8f9'}}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm" style={{color: '#3d1f28'}}>{c.tip}</p>
                      <p className="text-xs mt-0.5" style={{color: '#7a5c63'}}>
                        {c.start} → {c.sfarsit} ({c.zile} zile)
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: c.status === 'aprobat' ? '#d5f5e3' : '#fff0f3',
                        color: c.status === 'aprobat' ? '#1e8449' : '#c9748a'
                      }}>
                      {c.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Portal