import { useState } from 'react'
import axios from 'axios'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

function Asistent({ dateAngajat }) {
  const [open, setOpen] = useState(false)
  const [mesaje, setMesaje] = useState([
    { rol: 'asistent', text: `Buna ziua, ${dateAngajat?.nume || 'angajat'}! Sunt asistentul HR BeautyApp. Cu ce te pot ajuta astazi?` }
  ])
  const [intrebare, setIntrebare] = useState('')
  const [loading, setLoading] = useState(false)

  const trimite = async () => {
    if (!intrebare.trim()) return

    const intrebareNoua = intrebare
    setIntrebare('')
    setMesaje(prev => [...prev, { rol: 'user', text: intrebareNoua }])
    setLoading(true)

    try {
      const res = await axios.post(
        'https://beautyapp-production-4cd1.up.railway.app/api/asistent',
        { intrebare: intrebareNoua, dateAngajat }
      )
      setMesaje(prev => [...prev, { rol: 'asistent', text: res.data.raspuns }])
    } catch {
      setMesaje(prev => [...prev, { rol: 'asistent', text: 'Imi pare rau, a aparut o eroare. Te rog incearca din nou.' }])
    }
    setLoading(false)
  }

  const intrebariRapide = [
    'Cat sold de concediu am?',
    'Care e salariul meu net?',
    'Cate ore am lucrat luna aceasta?',
    'Cum depun o cerere de concediu?',
  ]

  return (
    <>
      {/* Buton flotant */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full text-white flex items-center justify-center z-50"
          style={{
            background: 'linear-gradient(135deg, #c9748a 0%, #a85570 100%)',
            boxShadow: '0 8px 25px rgba(201, 116, 138, 0.5)'
          }}
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Fereastra chat */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 rounded-3xl z-50 flex flex-col"
          style={{
            height: '480px',
            boxShadow: '0 20px 60px rgba(201, 116, 138, 0.3)',
            border: '1px solid #ffcad4'
          }}>

          {/* Header */}
          <div className="flex items-center justify-between p-4 rounded-t-3xl"
            style={{background: 'linear-gradient(135deg, #c9748a 0%, #a85570 100%)'}}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Bot size={16} style={{color: '#c9748a'}} />
              </div>
              <div>
                <p className="text-white font-medium text-sm">Asistent HR</p>
                <p className="text-xs" style={{color: 'rgba(255,255,255,0.8)'}}>BeautyApp</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white">
              <X size={18} />
            </button>
          </div>

          {/* Mesaje */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-white">
            {mesaje.map((m, i) => (
              <div key={i} className={`flex ${m.rol === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-xs px-4 py-2.5 rounded-2xl text-sm"
                  style={{
                    backgroundColor: m.rol === 'user' ? '#c9748a' : '#fff0f3',
                    color: m.rol === 'user' ? 'white' : '#3d1f28',
                    borderBottomRightRadius: m.rol === 'user' ? '4px' : '16px',
                    borderBottomLeftRadius: m.rol === 'asistent' ? '4px' : '16px',
                  }}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2.5 rounded-2xl text-sm" style={{backgroundColor: '#fff0f3', color: '#7a5c63'}}>
                  Se gandeste...
                </div>
              </div>
            )}
          </div>

          {/* Intrebari rapide */}
          {mesaje.length === 1 && (
            <div className="px-4 pb-2 bg-white flex flex-wrap gap-1">
              {intrebariRapide.map((q, i) => (
                <button key={i}
                  onClick={() => { setIntrebare(q); }}
                  className="text-xs px-2 py-1 rounded-xl"
                  style={{backgroundColor: '#fff0f3', color: '#c9748a', border: '1px solid #ffcad4'}}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white rounded-b-3xl flex gap-2"
            style={{borderTop: '1px solid #fff0f3'}}>
            <input
              type="text"
              placeholder="Scrie o intrebare..."
              value={intrebare}
              onChange={e => setIntrebare(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && trimite()}
              className="flex-1 rounded-xl px-3 py-2 text-sm outline-none"
              style={{border: '1.5px solid #ffcad4', color: '#3d1f28'}}
            />
            <button
              onClick={trimite}
              disabled={loading || !intrebare.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0"
              style={{background: 'linear-gradient(135deg, #c9748a, #a85570)'}}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Asistent
