import { useEffect, useState } from 'react'
import axios from 'axios'
import { UserPlus, Search, X, Check } from 'lucide-react'

function Angajati() {
  const [angajati, setAngajati] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [search, setSearch] = useState('')
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', phone: '',
    role: '', base_salary: '', commission_pct: '', product_comm_pct: ''
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    axios.get('https://beautyapp-production-4cd1.up.railway.app/api/employees')
      .then(res => { setAngajati(res.data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const filtered = angajati.filter(a =>
    `${a.first_name} ${a.last_name}`.toLowerCase().includes(search.toLowerCase()) ||
    a.role?.toLowerCase().includes(search.toLowerCase())
  )

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => {
      setSaved(false)
      setShowModal(false)
      setForm({ first_name: '', last_name: '', email: '', phone: '', role: '', base_salary: '', commission_pct: '', product_comm_pct: '' })
    }, 1500)
  }

  if (loading) return (
    <div className="p-8 flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin mx-auto mb-4"
          style={{borderColor: '#ffcad4', borderTopColor: 'transparent'}} />
        <p style={{color: '#c9748a'}}>Se incarca...</p>
      </div>
    </div>
  )

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold" style={{color: '#3d1f28'}}>Angajati</h1>
          <p className="text-sm mt-1" style={{color: '#7a5c63'}}>
            {angajati.length} angajati in sistem
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-medium"
          style={{
            background: 'linear-gradient(135deg, #c9748a 0%, #a85570 100%)',
            boxShadow: '0 8px 20px rgba(201, 116, 138, 0.3)'
          }}
        >
          <UserPlus size={18} />
          Angajat nou
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{color: '#c9748a'}} />
        <input
          type="text"
          placeholder="Cauta dupa nume sau rol..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-2xl pl-11 pr-4 py-3 text-sm outline-none bg-white"
          style={{border: '1.5px solid #ffcad4', color: '#3d1f28',
            boxShadow: '0 4px 15px rgba(201, 116, 138, 0.1)'}}
        />
      </div>

      {/* Tabel */}
      <div className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{color: '#7a5c63', borderBottom: '2px solid #fff0f3'}}>
              <th className="text-left py-3 pb-4">Nume</th>
              <th className="text-left py-3 pb-4">Rol</th>
              <th className="text-left py-3 pb-4">Departament</th>
              <th className="text-left py-3 pb-4">Email</th>
              <th className="text-left py-3 pb-4">Salariu baza</th>
              <th className="text-left py-3 pb-4">Comision</th>
              <th className="text-left py-3 pb-4">Status</th>
              <th className="text-left py-3 pb-4">Actiuni</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id} className="border-t" style={{borderColor: '#fff0f3'}}>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{background: 'linear-gradient(135deg, #ffcad4, #c9748a)'}}>
                      {a.first_name?.[0]}{a.last_name?.[0]}
                    </div>
                    <span className="font-medium" style={{color: '#3d1f28'}}>
                      {a.first_name} {a.last_name}
                    </span>
                  </div>
                </td>
                <td className="py-4" style={{color: '#7a5c63'}}>{a.role}</td>
                <td className="py-4" style={{color: '#7a5c63'}}>{a.department}</td>
                <td className="py-4" style={{color: '#7a5c63'}}>{a.email}</td>
                <td className="py-4 font-medium" style={{color: '#c9748a'}}>{a.base_salary} RON</td>
                <td className="py-4" style={{color: '#7a5c63'}}>{a.commission_pct}%</td>
                <td className="py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{backgroundColor: '#d5f5e3', color: '#1e8449'}}>
                    {a.status}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex gap-2">
                    <button className="text-xs px-3 py-1.5 rounded-xl font-medium"
                      style={{backgroundColor: '#fff0f3', color: '#c9748a'}}>
                      Editeaza
                    </button>
                    <button className="text-xs px-3 py-1.5 rounded-xl font-medium"
                      style={{backgroundColor: '#fdebd0', color: '#d35400'}}>
                      Sterge
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p style={{color: '#7a5c63'}}>Nu au fost gasiti angajati.</p>
          </div>
        )}
      </div>

      {/* Modal adaugare angajat */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50"
          style={{backgroundColor: 'rgba(61, 31, 40, 0.4)', backdropFilter: 'blur(4px)'}}>
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg mx-4"
            style={{boxShadow: '0 20px 60px rgba(201, 116, 138, 0.3)'}}>
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold" style={{color: '#3d1f28'}}>Angajat nou</h2>
              <button onClick={() => setShowModal(false)}
                className="p-2 rounded-xl" style={{backgroundColor: '#fff0f3', color: '#c9748a'}}>
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Prenume', field: 'first_name', placeholder: 'Ana' },
                { label: 'Nume', field: 'last_name', placeholder: 'Popescu' },
                { label: 'Email', field: 'email', placeholder: 'ana@salon.ro' },
                { label: 'Telefon', field: 'phone', placeholder: '0722 111 222' },
                { label: 'Rol', field: 'role', placeholder: 'Terapeut' },
                { label: 'Salariu baza (RON)', field: 'base_salary', placeholder: '2500' },
                { label: 'Comision servicii (%)', field: 'commission_pct', placeholder: '20' },
                { label: 'Comision produse (%)', field: 'product_comm_pct', placeholder: '10' },
              ].map(item => (
                <div key={item.field}>
                  <label className="text-xs font-medium mb-1 block" style={{color: '#7a5c63'}}>
                    {item.label}
                  </label>
                  <input
                    type="text"
                    placeholder={item.placeholder}
                    value={form[item.field]}
                    onChange={e => setForm({...form, [item.field]: e.target.value})}
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                    style={{border: '1.5px solid #ffcad4', color: '#3d1f28'}}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleSave}
              className="w-full mt-6 py-3 rounded-2xl font-semibold text-white flex items-center justify-center gap-2"
              style={{
                background: saved
                  ? 'linear-gradient(135deg, #1e8449, #145a32)'
                  : 'linear-gradient(135deg, #c9748a 0%, #a85570 100%)',
                boxShadow: '0 8px 20px rgba(201, 116, 138, 0.3)'
              }}
            >
              {saved ? <><Check size={18} /> Salvat!</> : 'Salveaza angajatul'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Angajati