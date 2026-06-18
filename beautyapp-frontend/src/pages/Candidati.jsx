import { useState } from 'react'

function Candidati() {
  const [candidati, setCandidati] = useState([
    { id: 1, nume: 'Ioana Marin', pozitie: 'Terapeut', email: 'ioana@gmail.com', telefon: '0722111222', status: 'nou', data: '2026-06-15' },
    { id: 2, nume: 'Cristina Popa', pozitie: 'Coafor', email: 'cristina@gmail.com', telefon: '0733222333', status: 'interviu', data: '2026-06-12' },
    { id: 3, nume: 'Andreea Dinu', pozitie: 'Receptioner', email: 'andreea@gmail.com', telefon: '0744333444', status: 'acceptat', data: '2026-06-10' },
    { id: 4, nume: 'Laura Stan', pozitie: 'Terapeut', email: 'laura@gmail.com', telefon: '0755444555', status: 'respins', data: '2026-06-08' },
  ])

  const statusStyle = (status) => {
    if (status === 'acceptat') return { backgroundColor: '#d5f5e3', color: '#1e8449' }
    if (status === 'respins') return { backgroundColor: '#fdebd0', color: '#d35400' }
    if (status === 'interviu') return { backgroundColor: '#d6eaf8', color: '#2471a3' }
    return { backgroundColor: '#fff0f3', color: '#c9748a' }
  }

  const handleStatus = (id, newStatus) => {
    setCandidati(candidati.map(c => c.id === id ? {...c, status: newStatus} : c))
  }

  const etape = ['nou', 'interviu', 'acceptat', 'respins']

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{color: '#3d1f28'}}>Candidati</h1>
          <p className="text-sm mt-1" style={{color: '#7a5c63'}}>Pipeline de recrutare</p>
        </div>
        <button
          className="px-6 py-3 rounded-xl text-white font-medium"
          style={{backgroundColor: '#c9748a'}}
        >
          + Candidat nou
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Noi', status: 'nou', color: '#c9748a' },
          { label: 'Interviu', status: 'interviu', color: '#2471a3' },
          { label: 'Acceptati', status: 'acceptat', color: '#1e8449' },
          { label: 'Respinsi', status: 'respins', color: '#d35400' },
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-sm mb-1" style={{color: '#7a5c63'}}>{card.label}</p>
            <p className="text-3xl font-bold" style={{color: card.color}}>
              {candidati.filter(c => c.status === card.status).length}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <table className="w-full text-sm">
          <thead>
            <tr style={{color: '#7a5c63'}}>
              <th className="text-left py-3">Nume</th>
              <th className="text-left py-3">Pozitie</th>
              <th className="text-left py-3">Email</th>
              <th className="text-left py-3">Telefon</th>
              <th className="text-left py-3">Data</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Actiuni</th>
            </tr>
          </thead>
          <tbody>
            {candidati.map((c) => (
              <tr key={c.id} className="border-t" style={{borderColor: '#fff0f3'}}>
                <td className="py-3 font-medium" style={{color: '#3d1f28'}}>{c.nume}</td>
                <td className="py-3" style={{color: '#7a5c63'}}>{c.pozitie}</td>
                <td className="py-3" style={{color: '#7a5c63'}}>{c.email}</td>
                <td className="py-3" style={{color: '#7a5c63'}}>{c.telefon}</td>
                <td className="py-3" style={{color: '#7a5c63'}}>{c.data}</td>
                <td className="py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={statusStyle(c.status)}>
                    {c.status}
                  </span>
                </td>
                <td className="py-3 flex gap-2">
                  {c.status !== 'acceptat' && c.status !== 'respins' && (
                    <>
                      <button
                        onClick={() => handleStatus(c.id, etape[etape.indexOf(c.status) + 1])}
                        className="text-xs px-3 py-1 rounded-lg"
                        style={{backgroundColor: '#d5f5e3', color: '#1e8449'}}
                      >
                        Avanseaza
                      </button>
                      <button
                        onClick={() => handleStatus(c.id, 'respins')}
                        className="text-xs px-3 py-1 rounded-lg"
                        style={{backgroundColor: '#fdebd0', color: '#d35400'}}
                      >
                        Respinge
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Candidati