const express = require('express')
const router = express.Router()
const { sql } = require('../database')

// GET toti angajatii din BD
router.get('/', async (req, res) => {
  try {
    const result = await sql.query`
      SELECT e.id, e.first_name, e.last_name, e.email, 
             e.phone, e.role, e.base_salary, 
             e.commission_pct, e.product_comm_pct,
             e.status, d.name as department
      FROM employees e
      LEFT JOIN departments d ON e.department_id = d.id
    `
    res.json(result.recordset)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET un angajat dupa id
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const result = await sql.query`
      SELECT * FROM employees WHERE id = ${id}
    `
    res.json(result.recordset[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router