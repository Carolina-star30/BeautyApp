const express = require('express')
const router = express.Router()
const Groq = require('groq-sdk').default || require('groq-sdk')

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

router.post('/', async (req, res) => {
  try {
    const { intrebare, dateAngajat } = req.body

    const systemPrompt = `Esti un asistent HR pentru salonul de infrumusetare BeautyApp.
Raspunzi EXCLUSIV in limba romana, politicos si concis.
Nu raspunzi la intrebari care nu sunt legate de activitatea salonului sau de datele angajatului.

Datele angajatului:
- Nume: ${dateAngajat?.nume || 'Angajat'}
- Sold concediu disponibil: ${dateAngajat?.soldConcediu || 18} zile
- Salariu net luna aceasta: ${dateAngajat?.salariuNet || 2176} RON
- Ore lucrate luna aceasta: ${dateAngajat?.oreLucrate || 142} ore
- Programari azi: ${dateAngajat?.programariAzi || 2}

Raspunde scurt si la obiect, maxim 3 propozitii.`

    const response = await groq.chat.completions.create({
      model: 'llama3-8b-8192',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: intrebare }
      ],
      max_tokens: 300,
      temperature: 0.7
    })

    res.json({ raspuns: response.choices[0].message.content })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router