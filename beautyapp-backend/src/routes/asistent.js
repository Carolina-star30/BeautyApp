const express = require('express')
const router = express.Router()
const Groq = require('groq-sdk').default || require('groq-sdk')

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

router.post('/', async (req, res) => {
  try {
    const { intrebare, dateAngajat } = req.body

    console.log('Intrebare primita:', intrebare)
    console.log('GROQ_API_KEY exists:', !!process.env.GROQ_API_KEY)

    const systemPrompt = `Esti un asistent HR pentru salonul de infrumusetare BeautyApp.
Raspunzi EXCLUSIV in limba romana, politicos si concis.
Daca intrebarea nu este legata de activitatea salonului, explica politicos ca poti ajuta doar cu informatii HR.

Datele angajatului:
- Nume: ${dateAngajat?.nume || 'Angajat'}
- Sold concediu disponibil: ${dateAngajat?.soldConcediu || 18} zile
- Salariu net luna aceasta: ${dateAngajat?.salariuNet || 2176} RON
- Ore lucrate luna aceasta: ${dateAngajat?.oreLucrate || 142} ore
- Programari azi: ${dateAngajat?.programariAzi || 2}

Raspunde scurt si la obiect, maxim 3 propozitii.`

    const response = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: intrebare }
      ],
      max_tokens: 300,
      temperature: 0.7
    })

    console.log('Raspuns Groq:', response.choices[0].message.content)
    res.json({ raspuns: response.choices[0].message.content })

  } catch (err) {
    console.error('GROQ ERROR:', err.message)
    console.error('GROQ ERROR DETAILS:', err)
    res.status(500).json({ 
      error: err.message,
      details: err.toString()
    })
  }
})

module.exports = router