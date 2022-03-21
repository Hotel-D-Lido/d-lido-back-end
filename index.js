const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

const guestsRoutes = require('./routes/guests.routes')
const categoriesRoutes = require('./routes/category.routes')
const roomsRoutes = require('./routes/rooms.routes')

app.use(
  cors({
    origin: ['http://localhost:4000']
  })
)

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Up and running')
})

app.use('/guests', guestsRoutes)
app.use('/category', categoriesRoutes)
app.use('/rooms', roomsRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
