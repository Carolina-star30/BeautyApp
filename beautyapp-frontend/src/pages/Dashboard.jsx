import logo from '../assets/logo.png'

function Dashboard() {
  return (
    <div className="min-h-screen flex" style={{backgroundColor: '#fff8f9'}}>
      
      {/* Sidebar */}
      <div className="w-64 min-h-screen flex flex-col py-8 px-4" style={{backgroundColor: '#ffcad4'}}>
        <div className="flex justify-center mb-10">
          <img src={logo} alt="BeautyApp" className="w-20" />
        </div>
        <nav className="flex flex-col gap-2">
          {['Dashboard', 'Angajati', 'Departamente', 'Prezenta', 'Salarizare', 'Concedii', 'Candidati', 'Setari'].map((item) => (
            <button
              key={item}
              className="text-left px-4 py-3 rounded-xl font-medium transition-all hover:bg-white"
              style={{color: '#3d1f28'}}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Continut principal */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-2" style={{color: '#3d1f28'}}>
          Buna ziua! 👋
        </h1>
        <p className="mb-8" style={{color: '#7a5c63'}}>
          Iata un sumar al activitatii salonului tau
        </p>

        {/* Carduri statistici */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Angajati activi', value: '12' },
            { label: 'Prezenti azi', value: '8' },
            { label: 'Cereri concediu', value: '2' },
            { label: 'Candidati noi', value: '3' },
          ].map((card) => (
            <div key={card.label} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-sm mb-1" style={{color: '#7a5c63'}}>{card.label}</p>
              <p className="text-3xl font-bold" style={{color: '#c9748a'}}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Tabel angajati recenti */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4" style={{color: '#3d1f28'}}>
            Angajati recenti
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr style={{color: '#7a5c63'}}>
                <th className="text-left py-2">Nume</th>
                <th className="text-left py-2">Rol</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { nume: 'Ana Popescu', rol: 'Terapeut', status: 'Prezent' },
                { nume: 'Maria Ion', rol: 'Coafor', status: 'Prezent' },
                { nume: 'Elena Radu', rol: 'Receptioner', status: 'Absent' },
              ].map((row) => (
                <tr key={row.nume} className="border-t" style={{borderColor: '#fff0f3'}}>
                  <td className="py-3 font-medium" style={{color: '#3d1f28'}}>{row.nume}</td>
                  <td className="py-3" style={{color: '#7a5c63'}}>{row.rol}</td>
                  <td className="py-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: row.status === 'Prezent' ? '#d5f5e3' : '#fdebd0',
                        color: row.status === 'Prezent' ? '#1e8449' : '#d35400'
                      }}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Dashboard