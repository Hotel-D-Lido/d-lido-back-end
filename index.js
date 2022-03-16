const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const guestsRoutes = require('./routes/guests.routes')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Up and running')
})

app.use('/guests', guestsRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
