import { useState } from 'react'

function Setari() {
  const [salon, setSalon] = useState({
    nume: 'Beauty Salon Carolina',
    email: 'contact@beautysalon.ro',
    telefon: '0722 123 456',
    adresa: 'Str. Frumusetii nr. 10, Iasi',
    program: 'Luni - Sambata: 09:00 - 20:00',
  })

  const handleChange = (field, value) => {
    setSalon({ ...salon, [field]: value })
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{color: '#3d1f28'}}>Setari</h1>
        <p className="text-sm mt-1" style={{color: '#7a5c63'}}>Informatii despre salonul tau</p>
      </div>

      <div className="grid grid-cols-2 gap-6">

        {/* Informatii salon */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-lg mb-6" style={{color: '#3d1f28'}}>
            Informatii salon
          </h2>

          <div className="flex flex-col gap-4">
            {[
              { label: 'Numele salonului', field: 'nume' },
              { label: 'Email contact', field: 'email' },
              { label: 'Telefon', field: 'telefon' },
              { label: 'Adresa', field: 'adresa' },
              { label: 'Program de lucru', field: 'program' },
            ].map((item) => (
              <div key={item.field}>
                <label className="text-xs font-medium mb-1 block" style={{color: '#7a5c63'}}>
                  {item.label}
                </label>
                <input
                  type="text"
                  value={salon[item.field]}
                  onChange={(e) => handleChange(item.field, e.target.value)}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                  style={{border: '1px solid #ffcad4', color: '#3d1f28'}}
                />
              </div>
            ))}

            <button
              className="mt-2 px-6 py-3 rounded-xl text-white font-medium"
              style={{backgroundColor: '#c9748a'}}
            >
              Salveaza modificarile
            </button>
          </div>
        </div>

        {/* Cont administrator */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-lg mb-6" style={{color: '#3d1f28'}}>
              Contul meu
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{backgroundColor: '#ffcad4'}}>
                👤
              </div>
              <div>
                <p className="font-bold" style={{color: '#3d1f28'}}>Administrator</p>
                <p className="text-sm" style={{color: '#7a5c63'}}>admin@beautysalon.ro</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button
                className="px-4 py-3 rounded-xl text-sm font-medium text-left"
                style={{backgroundColor: '#fff0f3', color: '#c9748a'}}
              >
                Schimba parola
              </button>
              <button
                className="px-4 py-3 rounded-xl text-sm font-medium text-left"
                style={{backgroundColor: '#fdebd0', color: '#d35400'}}
              >
                Deconectare
              </button>
            </div>
          </div>

          {/* Informatii aplicatie */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-lg mb-4" style={{color: '#3d1f28'}}>
              Despre aplicatie
            </h2>
            <div className="flex flex-col gap-2 text-sm" style={{color: '#7a5c63'}}>
              <p>Versiune: <span className="font-bold" style={{color: '#3d1f28'}}>1.0.0</span></p>
              <p>Platforma: <span className="font-bold" style={{color: '#3d1f28'}}>Microsoft Azure</span></p>
              <p>Frontend: <span className="font-bold" style={{color: '#3d1f28'}}>React.js + Vite</span></p>
              <p>Backend: <span className="font-bold" style={{color: '#3d1f28'}}>Node.js + Express</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Setari