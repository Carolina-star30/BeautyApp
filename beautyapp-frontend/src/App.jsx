import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Angajati from './pages/Angajati'
import Concedii from './pages/Concedii'
import logo from './assets/logo.png'

const menuItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Angajati', path: '/angajati' },
  { label: 'Departamente', path: '/departamente' },
  { label: 'Prezenta', path: '/prezenta' },
  { label: 'Salarizare', path: '/salarizare' },
  { label: 'Concedii', path: '/concedii' },
  { label: 'Candidati', path: '/candidati' },
  { label: 'Setari', path: '/setari' },
]

function Layout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="min-h-screen flex" style={{backgroundColor: '#fff8f9'}}>
      <div className="min-h-screen flex flex-col py-8 px-4" style={{backgroundColor: '#ffcad4', width: '256px', flexShrink: 0}}>
        <div className="flex justify-center mb-10">
          <img src={logo} alt="BeautyApp" className="w-20" />
        </div>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="text-left px-4 py-3 rounded-xl font-medium transition-all"
              style={{
                color: '#3d1f28',
                backgroundColor: location.pathname === item.path ? 'white' : 'transparent'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2" style={{color: '#3d1f28'}}>Buna ziua! 👋</h1>
      <p style={{color: '#7a5c63'}}>Iata un sumar al activitatii salonului tau</p>
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
        <Route path="/concedii" element={<Layout><Concedii /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App