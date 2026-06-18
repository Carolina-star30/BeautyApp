import { useState } from 'react'

function Departamente() {
  const [departamente] = useState([
    { id: 1, nume: 'Terapie', descriere: 'Masaj, tratamente corporale', angajati: 4, sef: 'Ana Popescu' },
    { id: 2, nume: 'Coafura', descriere: 'Coafor, colorat, styling', angajati: 3, sef: 'Maria Ion' },
    { id: 3, nume: 'Receptie', descriere: 'Primire clienti, programari', angajati: 2, sef: 'Elena Radu' },
    { id: 4, nume: 'Cosmetica', descriere: 'Ingrijire ten, make-up', angajati: 2, sef: 'Ioana Marin' },
  ])

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{color: '#3d1f28'}}>Departamente</h1>
          <p className="text-sm mt-1" style={{color: '#7a5c63'}}>Structura organizationala a salonului</p>
        </div>
        <button
          className="px-6 py-3 rounded-xl text-white font-medium"
          style={{backgroundColor: '#c9748a'}}
        >
          + Departament nou
        </button>
      </div>

      {/* Carduri departamente */}
      <div className="grid grid-cols-2 gap-6">
        {departamente.map((d) => (
          <div key={d.id} className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-lg font-bold" style={{color: '#3d1f28'}}>{d.nume}</h2>
                <p className="text-sm mt-1" style={{color: '#7a5c63'}}>{d.descriere}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="text-xs px-3 py-1 rounded-lg"
                  style={{backgroundColor: '#fff0f3', color: '#c9748a'}}
                >
                  Editeaza
                </button>
                <button
                  className="text-xs px-3 py-1 rounded-lg"
                  style={{backgroundColor: '#fdebd0', color: '#d35400'}}
                >
                  Sterge
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4" style={{borderTop: '1px solid #fff0f3'}}>
              <div className="p-3 rounded-xl" style={{backgroundColor: '#fff8f9'}}>
                <p className="text-xs mb-1" style={{color: '#7a5c63'}}>Numar angajati</p>
                <p className="text-2xl font-bold" style={{color: '#c9748a'}}>{d.angajati}</p>
              </div>
              <div className="p-3 rounded-xl" style={{backgroundColor: '#fff8f9'}}>
                <p className="text-xs mb-1" style={{color: '#7a5c63'}}>Sef departament</p>
                <p className="font-bold text-sm" style={{color: '#3d1f28'}}>{d.sef}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departamente