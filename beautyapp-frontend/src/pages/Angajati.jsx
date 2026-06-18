import { useEffect, useState } from 'react'
import axios from 'axios'

function Angajati() {
  const [angajati, setAngajati] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(res => {
        setAngajati(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <div className="p-8 flex items-center justify-center">
      <p style={{color: '#c9748a'}}>Se incarca...</p>
    </div>
  )

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{color: '#3d1f28'}}>Angajati</h1>
          <p className="text-sm mt-1" style={{color: '#7a5c63'}}>
            {angajati.length} angajati in sistem
          </p>
        </div>
        <button
          className="px-6 py-3 rounded-xl text-white font-medium"
          style={{backgroundColor: '#c9748a'}}
        >
          + Angajat nou
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <table className="w-full text-sm">
          <thead>
            <tr style={{color: '#7a5c63'}}>
              <th className="text-left py-3">Nume</th>
              <th className="text-left py-3">Rol</th>
              <th className="text-left py-3">Departament</th>
              <th className="text-left py-3">Email</th>
              <th className="text-left py-3">Salariu baza</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Actiuni</th>
            </tr>
          </thead>
          <tbody>
            {angajati.map((a) => (
              <tr key={a.id} className="border-t" style={{borderColor: '#fff0f3'}}>
                <td className="py-3 font-medium" style={{color: '#3d1f28'}}>
                  {a.first_name} {a.last_name}
                </td>
                <td className="py-3" style={{color: '#7a5c63'}}>{a.role}</td>
                <td className="py-3" style={{color: '#7a5c63'}}>{a.department}</td>
                <td className="py-3" style={{color: '#7a5c63'}}>{a.email}</td>
                <td className="py-3 font-medium" style={{color: '#c9748a'}}>
                  {a.base_salary} RON
                </td>
                <td className="py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{backgroundColor: '#d5f5e3', color: '#1e8449'}}>
                    {a.status}
                  </span>
                </td>
                <td className="py-3 flex gap-2">
                  <button className="text-xs px-3 py-1 rounded-lg"
                    style={{backgroundColor: '#fff0f3', color: '#c9748a'}}>
                    Editeaza
                  </button>
                  <button className="text-xs px-3 py-1 rounded-lg"
                    style={{backgroundColor: '#fdebd0', color: '#d35400'}}>
                    Sterge
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

export default Angajati