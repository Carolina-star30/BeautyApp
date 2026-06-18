const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { connectDB } = require('./src/database')
const employeesRoute = require('./src/routes/employees')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.json({ message: 'BeautyApp API functioneaza!' })
})

app.use('/api/employees', employeesRoute)

connectDB()

app.listen(PORT, () => {
  console.log(`Server pornit pe portul ${PORT}`)
})