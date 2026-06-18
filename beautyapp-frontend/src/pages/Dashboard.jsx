import { useNavigate } from 'react-router-dom'
import { Users, Clock, Calendar, UserPlus, TrendingUp, Award } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const dataGrafic = [
  { luna: 'Ian', prezenti: 10, absenti: 2 },
  { luna: 'Feb', prezenti: 11, absenti: 1 },
  { luna: 'Mar', prezenti: 9, absenti: 3 },
  { luna: 'Apr', prezenti: 12, absenti: 0 },
  { luna: 'Mai', prezenti: 10, absenti: 2 },
  { luna: 'Iun', prezenti: 11, absenti: 1 },
]

const dataSalarii = [
  { luna: 'Ian', total: 28000 },
  { luna: 'Feb', total: 29500 },
  { luna: 'Mar', total: 27800 },
  { luna: 'Apr', total: 31000 },
  { luna: 'Mai', total: 30500 },
  { luna: 'Iun', total: 32000 },
]

function Dashboard() {
  const navigate = useNavigate()

  const stats = [
    { label: 'Angajati activi', value: '11', icon: Users, color: '#c9748a', path: '/angajati' },
    { label: 'Prezenti azi', value: '8', icon: Clock, color: '#1e8449', path: '/prezenta' },
    { label: 'Cereri concediu', value: '2', icon: Calendar, color: '#2471a3', path: '/concedii' },
    { label: 'Candidati noi', value: '4', icon: UserPlus, color: '#d35400', path: '/candidati' },
  ]

  const activitati = [
    { text: 'Ana Popescu a depus cerere de concediu', timp: 'acum 5 min', icon: '📋' },
    { text: 'Cristina Popa a avansat la etapa Interviu', timp: 'acum 32 min', icon: '👤' },
    { text: 'Salariile pentru Iunie 2026 au fost calculate', timp: 'acum 2 ore', icon: '💰' },
    { text: 'Maria Ion a fost marcata prezenta', timp: 'acum 3 ore', icon: '✅' },
    { text: 'Departamentul Cosmetica a fost actualizat', timp: 'ieri', icon: '🏢' },
  ]

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-1" style={{color: '#3d1f28'}}>
          Buna ziua! 👋
        </h1>
        <p className="text-sm" style={{color: '#7a5c63'}}>
          {new Date().toLocaleDateString('ro-RO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Carduri statistici */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.label}
              onClick={() => navigate(s.path)}
              className="bg-white rounded-2xl p-6 cursor-pointer"
              style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-xl" style={{backgroundColor: s.color + '20'}}>
                  <Icon size={20} style={{color: s.color}} />
                </div>
                <TrendingUp size={14} style={{color: '#1e8449'}} />
              </div>
              <p className="text-3xl font-bold mb-1" style={{color: s.color}}>{s.value}</p>
              <p className="text-sm" style={{color: '#7a5c63'}}>{s.label}</p>
            </div>
          )
        })}
      </div>

      {/* Grafice */}
      <div className="grid grid-cols-2 gap-6 mb-6">

        {/* Grafic prezenta */}
        <div className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}>
          <h2 className="text-lg font-bold mb-6" style={{color: '#3d1f28'}}>
            Evolutia prezentei (6 luni)
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dataGrafic}>
              <CartesianGrid strokeDasharray="3 3" stroke="#fff0f3" />
              <XAxis dataKey="luna" tick={{fontSize: 12, fill: '#7a5c63'}} />
              <YAxis tick={{fontSize: 12, fill: '#7a5c63'}} />
              <Tooltip
                contentStyle={{borderRadius: '12px', border: '1px solid #ffcad4'}}
              />
              <Bar dataKey="prezenti" fill="#ffcad4" radius={[6,6,0,0]} name="Prezenti" />
              <Bar dataKey="absenti" fill="#fdebd0" radius={[6,6,0,0]} name="Absenti" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Grafic salarii */}
        <div className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}>
          <h2 className="text-lg font-bold mb-6" style={{color: '#3d1f28'}}>
            Evolutia costurilor salariale (RON)
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataSalarii}>
              <CartesianGrid strokeDasharray="3 3" stroke="#fff0f3" />
              <XAxis dataKey="luna" tick={{fontSize: 12, fill: '#7a5c63'}} />
              <YAxis tick={{fontSize: 12, fill: '#7a5c63'}} />
              <Tooltip
                contentStyle={{borderRadius: '12px', border: '1px solid #ffcad4'}}
                formatter={(value) => [`${value} RON`, 'Total salarii']}
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#c9748a"
                strokeWidth={3}
                dot={{fill: '#c9748a', r: 5}}
                activeDot={{r: 7}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Activitate recenta */}
      <div className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}>
        <div className="flex items-center gap-2 mb-6">
          <Award size={20} style={{color: '#c9748a'}} />
          <h2 className="text-lg font-bold" style={{color: '#3d1f28'}}>Activitate recenta</h2>
        </div>
        <div className="flex flex-col gap-4">
          {activitati.map((a, i) => (
            <div key={i} className="flex items-start gap-4 pb-4" 
              style={{borderBottom: i < activitati.length - 1 ? '1px solid #fff0f3' : 'none'}}>
              <span className="text-xl">{a.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium" style={{color: '#3d1f28'}}>{a.text}</p>
                <p className="text-xs mt-1" style={{color: '#7a5c63'}}>{a.timp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard