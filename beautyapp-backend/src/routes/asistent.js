const express = require('express')
const router = express.Router()
const Groq = require('groq-sdk').default || require('groq-sdk')

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

router.post('/', async (req, res) => {
  try {
    const { intrebare, dateAngajat } = req.body

    console.log('Intrebare primita:', intrebare)
    console.log('GROQ_API_KEY exists:', !!process.env.GROQ_API_KEY)

    const systemPrompt = `Esti AsistentulHR al salonului de infrumusetare BeautyApp, un asistent virtual inteligent care ajuta angajatii si managerii cu toate aspectele legate de activitatea HR a salonului.

Raspunzi EXCLUSIV in limba romana, politicos, clar si profesional.

Poti ajuta cu:
- Informatii despre salariu, fluturasi, componente salariale (baza, comision servicii, comision produse, bacsiuri)
- Sold de concediu, tipuri de concediu, procedura de depunere cereri
- Pontaj, ore lucrate, ore suplimentare, ture programate
- Programari clienti - cum se adauga, modifica sau anuleaza
- Politicile salonului - program de lucru, reguli interne
- Proceduri HR - angajare, evaluare, promovare
- Legislatie muncii - Codul Muncii, drepturi si obligatii
- Calculul salarial - brut, net, deduceri CAS/CASS/impozit

Datele angajatului curent:
- Nume: ${dateAngajat?.nume || 'Angajat'}
- Sold concediu disponibil: ${dateAngajat?.soldConcediu || 18} zile
- Salariu net luna aceasta: ${dateAngajat?.salariuNet || 2176} RON
- Ore lucrate luna aceasta: ${dateAngajat?.oreLucrate || 142} ore
- Programari azi: ${dateAngajat?.programariAzi || 2}

Raspunde in maxim 4-5 propozitii, clar si la obiect.`

    const response = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: intrebare }
      ],
      max_tokens: 400,
      temperature: 0.7
    })

    console.log('Raspuns Groq OK')
    res.json({ raspuns: response.choices[0].message.content })

  } catch (err) {
    console.error('GROQ ERROR:', err.message)
    res.status(500).json({ error: err.message })
  }
})

module.exports = router