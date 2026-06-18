const sql = require('mssql')
require('dotenv').config()

const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
}

const connectDB = async () => {
  try {
    await sql.connect(config)
    console.log('Conectat la Azure SQL Database!')
  } catch (err) {
    console.error('Eroare conectare BD:', err.message)
  }
}

module.exports = { sql, connectDB }
