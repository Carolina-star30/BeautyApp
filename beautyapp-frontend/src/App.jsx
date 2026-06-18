import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, Building2, Clock, DollarSign, Calendar, UserPlus, Settings, LogOut } from 'lucide-react'
import Login from './pages/Login'
import Angajati from './pages/Angajati'
import Concedii from './pages/Concedii'
import Salarizare from './pages/Salarizare'
import Prezenta from './pages/Prezenta'
import Departamente from './pages/Departamente'
import Candidati from './pages/Candidati'
import Setari from './pages/Setari'
import Dashboard from './pages/Dashboard'
import logo from './assets/logo.png'

const menuItems = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Angajati', path: '/angajati', icon: Users },
  { label: 'Departamente', path: '/departamente', icon: Building2 },
  { label: 'Prezenta', path: '/prezenta', icon: Clock },
  { label: 'Salarizare', path: '/salarizare', icon: DollarSign },
  { label: 'Concedii', path: '/concedii', icon: Calendar },
  { label: 'Candidati', path: '/candidati', icon: UserPlus },
  { label: 'Setari', path: '/setari', icon: Settings },
]

function Layout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="min-h-screen flex" style={{backgroundColor: '#fff8f9'}}>
      {/* Sidebar */}
      <div className="min-h-screen flex flex-col py-8 px-4" 
        style={{
          width: '256px', 
          flexShrink: 0,
          background: 'linear-gradient(180deg, #ffcad4 0%, #f4a0b0 100%)',
          boxShadow: '4px 0 20px rgba(201, 116, 138, 0.15)'
        }}>
        
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src={logo} alt="BeautyApp" className="w-24 drop-shadow-md" />
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-1 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl font-medium text-left"
                style={{
                  color: isActive ? '#c9748a' : '#3d1f28',
                  backgroundColor: isActive ? 'white' : 'transparent',
                  boxShadow: isActive ? '0 4px 15px rgba(201, 116, 138, 0.2)' : 'none',
                  fontWeight: isActive ? '600' : '400'
                }}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 1.8} />
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Logout */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 px-4 py-3 rounded-2xl font-medium mt-4"
          style={{color: '#3d1f28', backgroundColor: 'rgba(255,255,255,0.4)'}}
        >
          <LogOut size={18} strokeWidth={1.8} />
          Deconectare
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/angajati" element={<Layout><Angajati /></Layout>} />
        <Route path="/departamente" element={<Layout><Departamente /></Layout>} />
        <Route path="/prezenta" element={<Layout><Prezenta /></Layout>} />
        <Route path="/salarizare" element={<Layout><Salarizare /></Layout>} />
        <Route path="/concedii" element={<Layout><Concedii /></Layout>} />
        <Route path="/candidati" element={<Layout><Candidati /></Layout>} />
        <Route path="/setari" element={<Layout><Setari /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App