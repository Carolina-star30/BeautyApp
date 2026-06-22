import { useState } from 'react'
import { Calendar, Clock, User, Plus, X, Check } from 'lucide-react'

const ore = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
             '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
             '17:00', '17:30', '18:00', '18:30', '19:00']

function Programari() {
  const [showModal, setShowModal] = useState(false)
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    client: '', telefon: '', serviciu: '', terapeut: '', ora: '', durata: '60', data: new Date().toISOString().split('T')[0]
  })

  const [programari, setProgramari] = useState([
    { id: 1, client: 'Maria Gheorghe', telefon: '0721000001', serviciu: 'Masaj relaxare', terapeut: 'Ana Popescu', ora: '09:00', durata: 60, data: new Date().toISOString().split('T')[0], status: 'confirmata' },
    { id: 2, client: 'Ioana Stan', telefon: '0721000002', serviciu: 'Coafor styling', terapeut: 'Maria Ion', ora: '10:30', durata: 90, data: new Date().toISOString().split('T')[0], status: 'confirmata' },
    { id: 3, client: 'Elena Popa', telefon: '0721000003', serviciu: 'Manichiura', terapeut: 'Ana Popescu', ora: '13:00', durata: 60, data: new Date().toISOString().split('T')[0], status: 'in asteptare' },
    { id: 4, client: 'Andreea Marin', telefon: '0721000004', serviciu: 'Tratament facial', terapeut: 'Elena Radu', ora: '15:00', durata: 45, data: new Date().toISOString().split('T')[0], status: 'finalizata' },
  ])

  const handleSave = () => {
    if (form.client && form.serviciu && form.terapeut && form.ora) {
      const noua = {
        id: programari.length + 1,
        ...form,
        durata: parseInt(form.durata),
        status: 'confirmata'
      }
      setProgramari([...programari, noua])
      setSaved(true)
      setTimeout(() => {
        setSaved(false)
        setShowModal(false)
        setForm({ client: '', telefon: '', serviciu: '', terapeut: '', ora: '', durata: '60', data: new Date().toISOString().split('T')[0] })
      }, 1500)
    }
  }

  const handleStatus = (id, status) => {
    setProgramari(programari.map(p => p.id === id ? {...p, status} : p))
  }

  const statusStyle = (status) => {
    if (status === 'confirmata') return { backgroundColor: '#d5f5e3', color: '#1e8449' }
    if (status === 'finalizata') return { backgroundColor: '#d6eaf8', color: '#2471a3' }
    if (status === 'anulata') return { backgroundColor: '#fdebd0', color: '#d35400' }
    return { backgroundColor: '#fff0f3', color: '#c9748a' }
  }

  const azi = programari.filter(p => p.data === new Date().toISOString().split('T')[0])

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold" style={{color: '#3d1f28'}}>Programari</h1>
          <p className="text-sm mt-1" style={{color: '#7a5c63'}}>
            {azi.length} programari astazi — {new Date().toLocaleDateString('ro-RO', {weekday: 'long', day: 'numeric', month: 'long'})}
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
          <Plus size={18} />
          Programare noua
        </button>
      </div>

      {/* Carduri statistici */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total azi', value: azi.length, color: '#c9748a' },
          { label: 'Confirmate', value: azi.filter(p => p.status === 'confirmata').length, color: '#1e8449' },
          { label: 'In asteptare', value: azi.filter(p => p.status === 'in asteptare').length, color: '#d35400' },
          { label: 'Finalizate', value: azi.filter(p => p.status === 'finalizata').length, color: '#2471a3' },
        ].map(card => (
          <div key={card.label} className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}>
            <p className="text-sm mb-1" style={{color: '#7a5c63'}}>{card.label}</p>
            <p className="text-3xl font-bold" style={{color: card.color}}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Lista programari */}
      <div className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(201, 116, 138, 0.1)'}}>
        <h2 className="font-bold text-lg mb-6" style={{color: '#3d1f28'}}>Programarile de azi</h2>
        <div className="flex flex-col gap-3">
          {azi.sort((a, b) => a.ora.localeCompare(b.ora)).map(p => (
            <div key={p.id} className="flex items-center gap-4 p-4 rounded-2xl"
              style={{backgroundColor: '#fff8f9', border: '1px solid #fff0f3'}}>
              
              {/* Ora */}
              <div className="text-center w-16 flex-shrink-0">
                <p className="font-bold text-lg" style={{color: '#c9748a'}}>{p.ora}</p>
                <p className="text-xs" style={{color: '#7a5c63'}}>{p.durata} min</p>
              </div>

              {/* Separator */}
              <div className="w-1 h-12 rounded-full flex-shrink-0" style={{backgroundColor: '#ffcad4'}} />

              {/* Info client */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <User size={14} style={{color: '#c9748a'}} />
                  <p className="font-medium text-sm" style={{color: '#3d1f28'}}>{p.client}</p>
                  <span className="text-xs" style={{color: '#7a5c63'}}>— {p.telefon}</span>
                </div>
                <p className="text-sm" style={{color: '#7a5c63'}}>
                  {p.serviciu} · <span style={{color: '#c9748a'}}>{p.terapeut}</span>
                </p>
              </div>

              {/* Status */}
              <span className="px-3 py-1 rounded-full text-xs font-medium flex-shrink-0"
                style={statusStyle(p.status)}>
                {p.status}
              </span>

              {/* Actiuni */}
              <div className="flex gap-2 flex-shrink-0">
                {p.status === 'confirmata' && (
                  <button
                    onClick={() => handleStatus(p.id, 'finalizata')}
                    className="p-2 rounded-xl"
                    style={{backgroundColor: '#d5f5e3', color: '#1e8449'}}
                    title="Finalizeaza"
                  >
                    <Check size={14} />
                  </button>
                )}
                {p.status !== 'anulata' && p.status !== 'finalizata' && (
                  <button
                    onClick={() => handleStatus(p.id, 'anulata')}
                    className="p-2 rounded-xl"
                    style={{backgroundColor: '#fdebd0', color: '#d35400'}}
                    title="Anuleaza"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}

          {azi.length === 0 && (
            <div className="text-center py-12">
              <Calendar size={40} className="mx-auto mb-4" style={{color: '#ffcad4'}} />
              <p style={{color: '#7a5c63'}}>Nu sunt programari pentru astazi.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal programare noua */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50"
          style={{backgroundColor: 'rgba(61, 31, 40, 0.4)', backdropFilter: 'blur(4px)'}}>
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg mx-4"
            style={{boxShadow: '0 20px 60px rgba(201, 116, 138, 0.3)'}}>
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold" style={{color: '#3d1f28'}}>Programare noua</h2>
              <button onClick={() => setShowModal(false)}
                className="p-2 rounded-xl" style={{backgroundColor: '#fff0f3', color: '#c9748a'}}>
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: 'Nume client', field: 'client', placeholder: 'Maria Gheorghe' },
                { label: 'Telefon', field: 'telefon', placeholder: '0721 000 000' },
                { label: 'Serviciu', field: 'serviciu', placeholder: 'Masaj relaxare' },
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium mb-1 block" style={{color: '#7a5c63'}}>Terapeut</label>
                  <select
                    value={form.terapeut}
                    onChange={e => setForm({...form, terapeut: e.target.value})}
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                    style={{border: '1.5px solid #ffcad4', color: '#3d1f28'}}
                  >
                    <option value="">Selecteaza</option>
                    <option>Ana Popescu</option>
                    <option>Maria Ion</option>
                    <option>Elena Radu</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium mb-1 block" style={{color: '#7a5c63'}}>Ora</label>
                  <select
                    value={form.ora}
                    onChange={e => setForm({...form, ora: e.target.value})}
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                    style={{border: '1.5px solid #ffcad4', color: '#3d1f28'}}
                  >
                    <option value="">Selecteaza</option>
                    {ore.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium mb-1 block" style={{color: '#7a5c63'}}>Data</label>
                  <input
                    type="date"
                    value={form.data}
                    onChange={e => setForm({...form, data: e.target.value})}
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                    style={{border: '1.5px solid #ffcad4', color: '#3d1f28'}}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium mb-1 block" style={{color: '#7a5c63'}}>Durata (min)</label>
                  <select
                    value={form.durata}
                    onChange={e => setForm({...form, durata: e.target.value})}
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                    style={{border: '1.5px solid #ffcad4', color: '#3d1f28'}}
                  >
                    <option value="30">30 min</option>
                    <option value="45">45 min</option>
                    <option value="60">60 min</option>
                    <option value="90">90 min</option>
                    <option value="120">120 min</option>
                  </select>
                </div>
              </div>
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
              {saved ? <><Check size={18} /> Salvat!</> : 'Salveaza programarea'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Programari