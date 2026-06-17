const express = require('express')
const router = express.Router()

// GET toti angajatii
router.get('/', (req, res) => {
  res.json([
    { id: 1, nume: 'Ana Popescu', rol: 'Terapeut', status: 'activ' },
    { id: 2, nume: 'Maria Ion', rol: 'Coafor', status: 'activ' },
    { id: 3, nume: 'Elena Radu', rol: 'Receptioner', status: 'activ' },
  ])
})

// GET un angajat dupa id
router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, nume: 'Ana Popescu', rol: 'Terapeut' })
})

module.exports = router