import { useState } from 'react'

function Concedii() {
  const [cereri, setCereri] = useState([
    { id: 1, angajat: 'Ana Popescu', start: '2026-07-01', sfarsit: '2026-07-07', zile: 6, tip: 'Odihna', status: 'in asteptare' },
    { id: 2, angajat: 'Maria Ion', start: '2026-06-20', sfarsit: '2026-06-22', zile: 2, tip: 'Medical', status: 'aprobat' },
    { id: 3, angajat: 'Elena Radu', start: '2026-08-01', sfarsit: '2026-08-05', zile: 4, tip: 'Odihna', status: 'respins' },
  ])

  const handleStatus = (id, newStatus) => {
    setCereri(cereri.map(c => c.id === id ? {...c, status: newStatus} : c))
  }

  const statusStyle = (status) => {
    if (status === 'aprobat') return { backgroundColor: '#d5f5e3', color: '#1e8449' }
    if (status === 'respins') return { backgroundColor: '#fdebd0', color: '#d35400' }
    return { backgroundColor: '#fff0f3', color: '#c9748a' }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{color: '#3d1f28'}}>Concedii</h1>
          <p className="text-sm mt-1" style={{color: '#7a5c63'}}>Gestionează cererile de concediu</p>
        </div>
        <button
          className="px-6 py-3 rounded-xl text-white font-medium"
          style={{backgroundColor: '#c9748a'}}
        >
          + Cerere nouă
        </button>
      </div>

      {/* Carduri sumar */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'In asteptare', value: cereri.filter(c => c.status === 'in asteptare').length, color: '#c9748a' },
          { label: 'Aprobate', value: cereri.filter(c => c.status === 'aprobat').length, color: '#1e8449' },
          { label: 'Respinse', value: cereri.filter(c => c.status === 'respins').length, color: '#d35400' },
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-sm mb-1" style={{color: '#7a5c63'}}>{card.label}</p>
            <p className="text-3xl font-bold" style={{color: card.color}}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Tabel cereri */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <table className="w-full text-sm">
          <thead>
            <tr style={{color: '#7a5c63'}}>
              <th className="text-left py-3">Angajat</th>
              <th className="text-left py-3">Perioada</th>
              <th className="text-left py-3">Zile</th>
              <th className="text-left py-3">Tip</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Actiuni</th>
            </tr>
          </thead>
          <tbody>
            {cereri.map((c) => (
              <tr key={c.id} className="border-t" style={{borderColor: '#fff0f3'}}>
                <td className="py-3 font-medium" style={{color: '#3d1f28'}}>{c.angajat}</td>
                <td className="py-3" style={{color: '#7a5c63'}}>{c.start} → {c.sfarsit}</td>
                <td className="py-3 font-bold" style={{color: '#c9748a'}}>{c.zile}</td>
                <td className="py-3" style={{color: '#7a5c63'}}>{c.tip}</td>
                <td className="py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={statusStyle(c.status)}>
                    {c.status}
                  </span>
                </td>
                <td className="py-3 flex gap-2">
                  {c.status === 'in asteptare' && (
                    <>
                      <button
                        onClick={() => handleStatus(c.id, 'aprobat')}
                        className="text-xs px-3 py-1 rounded-lg"
                        style={{backgroundColor: '#d5f5e3', color: '#1e8449'}}
                      >
                        Aprobă
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

export default Concedii