import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const stats = [
    { label: 'Angajati activi', value: '11', color: '#c9748a', path: '/angajati' },
    { label: 'Prezenti azi', value: '8', color: '#1e8449', path: '/prezenta' },
    { label: 'Cereri concediu', value: '2', color: '#2471a3', path: '/concedii' },
    { label: 'Candidati noi', value: '4', color: '#d35400', path: '/candidati' },
  ]

  const activitati = [
    { text: 'Ana Popescu a depus cerere de concediu', timp: 'acum 5 min', icon: '📋' },
    { text: 'Cristina Popa a avansat la etapa Interviu', timp: 'acum 32 min', icon: '👤' },
    { text: 'Salariile pentru Iunie 2026 au fost calculate', timp: 'acum 2 ore', icon: '💰' },
    { text: 'Maria Ion a fost marcata prezenta', timp: 'acum 3 ore', icon: '✅' },
    { text: 'Departamentul Cosmetica a fost actualizat', timp: 'ieri', icon: '🏢' },
  ]

  const angajatiRecenti = [
    { nume: 'Ana Popescu', rol: 'Terapeut', status: 'prezent' },
    { nume: 'Maria Ion', rol: 'Coafor', status: 'prezent' },
    { nume: 'Elena Radu', rol: 'Receptioner', status: 'absent' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{color: '#3d1f28'}}>
          Buna ziua! 👋
        </h1>
        <p className="text-sm mt-1" style={{color: '#7a5c63'}}>
          Iata un sumar al activitatii salonului tau — {new Date().toLocaleDateString('ro-RO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Carduri statistici */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            onClick={() => navigate(s.path)}
            className="bg-white rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all"
          >
            <p className="text-sm mb-1" style={{color: '#7a5c63'}}>{s.label}</p>
            <p className="text-3xl font-bold" style={{color: s.color}}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">

        {/* Angajati recenti */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg" style={{color: '#3d1f28'}}>Angajati</h2>
            <button
              onClick={() => navigate('/angajati')}
              className="text-xs px-3 py-1 rounded-lg"
              style={{backgroundColor: '#fff0f3', color: '#c9748a'}}
            >
              Vezi toti
            </button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr style={{color: '#7a5c63'}}>
                <th className="text-left py-2">Nume</th>
                <th className="text-left py-2">Rol</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {angajatiRecenti.map((a) => (
                <tr key={a.nume} className="border-t" style={{borderColor: '#fff0f3'}}>
                  <td className="py-3 font-medium" style={{color: '#3d1f28'}}>{a.nume}</td>
                  <td className="py-3" style={{color: '#7a5c63'}}>{a.rol}</td>
                  <td className="py-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: a.status === 'prezent' ? '#d5f5e3' : '#fdebd0',
                        color: a.status === 'prezent' ? '#1e8449' : '#d35400'
                      }}>
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Activitate recenta */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-lg mb-4" style={{color: '#3d1f28'}}>Activitate recenta</h2>
          <div className="flex flex-col gap-3">
            {activitati.map((a, i) => (
              <div key={i} className="flex items-start gap-3 pb-3" style={{borderBottom: '1px solid #fff0f3'}}>
                <span className="text-xl">{a.icon}</span>
                <div>
                  <p className="text-sm" style={{color: '#3d1f28'}}>{a.text}</p>
                  <p className="text-xs mt-1" style={{color: '#7a5c63'}}>{a.timp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard