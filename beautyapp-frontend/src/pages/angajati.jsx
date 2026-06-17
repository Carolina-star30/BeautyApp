function Angajati() {
  return (
    <div className="flex-1 p-8" style={{backgroundColor: '#fff8f9'}}>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{color: '#3d1f28'}}>
            Angajați
          </h1>
          <p className="text-sm mt-1" style={{color: '#7a5c63'}}>
            Gestionează echipa salonului tău
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
              <th className="text-left py-3">Email</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Actiuni</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, nume: 'Ana Popescu', rol: 'Terapeut', email: 'ana@salon.ro', status: 'activ' },
              { id: 2, nume: 'Maria Ion', rol: 'Coafor', email: 'maria@salon.ro', status: 'activ' },
              { id: 3, nume: 'Elena Radu', rol: 'Receptioner', email: 'elena@salon.ro', status: 'activ' },
            ].map((a) => (
              <tr key={a.id} className="border-t" style={{borderColor: '#fff0f3'}}>
                <td className="py-3 font-medium" style={{color: '#3d1f28'}}>{a.nume}</td>
                <td className="py-3" style={{color: '#7a5c63'}}>{a.rol}</td>
                <td className="py-3" style={{color: '#7a5c63'}}>{a.email}</td>
                <td className="py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{backgroundColor: '#d5f5e3', color: '#1e8449'}}>
                    {a.status}
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-xs px-3 py-1 rounded-lg mr-2"
                    style={{backgroundColor: '#fff0f3', color: '#c9748a'}}>
                    Editează
                  </button>
                  <button className="text-xs px-3 py-1 rounded-lg"
                    style={{backgroundColor: '#fdebd0', color: '#d35400'}}>
                    Șterge
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