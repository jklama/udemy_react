const app = require('./app')
const dotenv = require('dotenv').config({ path: 'backend/config/config.env' })
const port = 5000

const connectDatabase = require('./config/database')

connectDatabase()
app.listen(port, () => {
  console.log(`server started in port : ${port}`)
})
//to handle rejection when adding a non usable mongo url
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  console.log(`shutting down the server`)
  server.close(() => {
    process.exit(1)
  })
})

//handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`)
  console.log(`shutting down`)
  process.exit(1)
})
