function Salarizare() {
  const angajati = [
    { id: 1, nume: 'Ana Popescu', rol: 'Terapeut', baza: 2500, servicii: 4200, comisionPct: 20, produse: 800, comisionProdPct: 10, bacsiuri: 300 },
    { id: 2, nume: 'Maria Ion', rol: 'Coafor', baza: 2800, servicii: 3600, comisionPct: 18, produse: 500, comisionProdPct: 10, bacsiuri: 200 },
    { id: 3, nume: 'Elena Radu', rol: 'Receptioner', baza: 2200, servicii: 0, comisionPct: 0, produse: 0, comisionProdPct: 0, bacsiuri: 100 },
  ]

  const calcSalariu = (a) => {
    const comServ = a.servicii * (a.comisionPct / 100)
    const comProd = a.produse * (a.comisionProdPct / 100)
    const brut = a.baza + comServ + comProd + a.bacsiuri
    const cas = brut * 0.25
    const cass = brut * 0.10
    const impozit = (brut - cas - cass) * 0.10
    const net = brut - cas - cass - impozit
    return { brut: brut.toFixed(0), net: net.toFixed(0), comServ: comServ.toFixed(0), comProd: comProd.toFixed(0) }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{color: '#3d1f28'}}>Salarizare</h1>
          <p className="text-sm mt-1" style={{color: '#7a5c63'}}>Calcul salarii — Iunie 2026</p>
        </div>
        <button
          className="px-6 py-3 rounded-xl text-white font-medium"
          style={{backgroundColor: '#c9748a'}}
        >
          Generează fluturași
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {angajati.map((a) => {
          const sal = calcSalariu(a)
          return (
            <div key={a.id} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="font-bold text-lg" style={{color: '#3d1f28'}}>{a.nume}</h2>
                  <p className="text-sm" style={{color: '#7a5c63'}}>{a.rol}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm" style={{color: '#7a5c63'}}>Salariu net</p>
                  <p className="text-2xl font-bold" style={{color: '#c9748a'}}>{sal.net} RON</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 pt-4" style={{borderTop: '1px solid #fff0f3'}}>
                <div className="text-center p-3 rounded-xl" style={{backgroundColor: '#fff8f9'}}>
                  <p className="text-xs mb-1" style={{color: '#7a5c63'}}>Salariu baza</p>
                  <p className="font-bold" style={{color: '#3d1f28'}}>{a.baza} RON</p>
                </div>
                <div className="text-center p-3 rounded-xl" style={{backgroundColor: '#fff8f9'}}>
                  <p className="text-xs mb-1" style={{color: '#7a5c63'}}>Comision servicii ({a.comisionPct}%)</p>
                  <p className="font-bold" style={{color: '#3d1f28'}}>{sal.comServ} RON</p>
                </div>
                <div className="text-center p-3 rounded-xl" style={{backgroundColor: '#fff8f9'}}>
                  <p className="text-xs mb-1" style={{color: '#7a5c63'}}>Comision produse ({a.comisionProdPct}%)</p>
                  <p className="font-bold" style={{color: '#3d1f28'}}>{sal.comProd} RON</p>
                </div>
                <div className="text-center p-3 rounded-xl" style={{backgroundColor: '#fff8f9'}}>
                  <p className="text-xs mb-1" style={{color: '#7a5c63'}}>Bacsiuri declarate</p>
                  <p className="font-bold" style={{color: '#3d1f28'}}>{a.bacsiuri} RON</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-3 pt-3" style={{borderTop: '1px solid #fff0f3'}}>
                <p className="text-sm" style={{color: '#7a5c63'}}>
                  Salariu brut: <span className="font-bold" style={{color: '#3d1f28'}}>{sal.brut} RON</span>
                  {' '}→ Deduceri (CAS 25% + CASS 10% + Impozit 10%) →{' '}
                  Net: <span className="font-bold" style={{color: '#c9748a'}}>{sal.net} RON</span>
                </p>
                <button
                  className="text-xs px-4 py-2 rounded-lg"
                  style={{backgroundColor: '#fff0f3', color: '#c9748a'}}
                >
                  Fluturas PDF
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Salarizare