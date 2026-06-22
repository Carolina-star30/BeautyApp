const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { connectDB } = require('./src/database')
const employeesRoute = require('./src/routes/employees')
const asistentRoute = require('./src/routes/asistent')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'https://rainbow-sprite-633770.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())


app.get('/', (req, res) => {
  res.json({ message: 'BeautyApp API functioneaza!' })
})

app.use('/api/employees', employeesRoute)
app.use('/api/asistent', asistentRoute)

connectDB()

app.listen(PORT, () => {
  console.log(`Server pornit pe portul ${PORT}`)
})