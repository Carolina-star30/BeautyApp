import { useState } from 'react'

function Prezenta() {
  const azi = new Date().toISOString().split('T')[0]

  const [prezenta, setPrezenta] = useState([
    { id: 1, nume: 'Ana Popescu', rol: 'Terapeut', intrare: '09:00', iesire: '18:00', status: 'prezent' },
    { id: 2, nume: 'Maria Ion', rol: 'Coafor', intrare: '10:00', iesire: '19:00', status: 'prezent' },
    { id: 3, nume: 'Elena Radu', rol: 'Receptioner', intrare: '-', iesire: '-', status: 'absent' },
  ])

  const toggleStatus = (id) => {
    setPrezenta(prezenta.map(p =>
      p.id === id
        ? { ...p, status: p.status === 'prezent' ? 'absent' : 'prezent',
            intrare: p.status === 'prezent' ? '-' : '09:00',
            iesire: p.status === 'prezent' ? '-' : '18:00' }
        : p
    ))
  }

  const prezenti = prezenta.filter(p => p.status === 'prezent').length
  const absenti = prezenta.filter(p => p.status === 'absent').length

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{color: '#3d1f28'}}>Prezenta</h1>
          <p className="text-sm mt-1" style={{color: '#7a5c63'}}>Data: {azi}</p>
        </div>
      </div>

      {/* Carduri */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-sm mb-1" style={{color: '#7a5c63'}}>Total angajati</p>
          <p className="text-3xl font-bold" style={{color: '#3d1f28'}}>{prezenta.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-sm mb-1" style={{color: '#7a5c63'}}>Prezenti</p>
          <p className="text-3xl font-bold" style={{color: '#1e8449'}}>{prezenti}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-sm mb-1" style={{color: '#7a5c63'}}>Absenti</p>
          <p className="text-3xl font-bold" style={{color: '#d35400'}}>{absenti}</p>
        </div>
      </div>

      {/* Tabel prezenta */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <table className="w-full text-sm">
          <thead>
            <tr style={{color: '#7a5c63'}}>
              <th className="text-left py-3">Angajat</th>
              <th className="text-left py-3">Rol</th>
              <th className="text-left py-3">Intrare</th>
              <th className="text-left py-3">Iesire</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Actiune</th>
            </tr>
          </thead>
          <tbody>
            {prezenta.map((p) => (
              <tr key={p.id} className="border-t" style={{borderColor: '#fff0f3'}}>
                <td className="py-3 font-medium" style={{color: '#3d1f28'}}>{p.nume}</td>
                <td className="py-3" style={{color: '#7a5c63'}}>{p.rol}</td>
                <td className="py-3 font-medium" style={{color: '#c9748a'}}>{p.intrare}</td>
                <td className="py-3 font-medium" style={{color: '#c9748a'}}>{p.iesire}</td>
                <td className="py-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: p.status === 'prezent' ? '#d5f5e3' : '#fdebd0',
                      color: p.status === 'prezent' ? '#1e8449' : '#d35400'
                    }}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="py-3">
                  <button
                    onClick={() => toggleStatus(p.id)}
                    className="text-xs px-3 py-1 rounded-lg"
                    style={{
                      backgroundColor: p.status === 'prezent' ? '#fdebd0' : '#d5f5e3',
                      color: p.status === 'prezent' ? '#d35400' : '#1e8449'
                    }}
                  >
                    {p.status === 'prezent' ? 'Marcheaza absent' : 'Marcheaza prezent'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Prezenta