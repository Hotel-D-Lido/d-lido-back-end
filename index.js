const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

const guestsRoutes = require('./routes/guests.routes')
const roomsRoutes = require('./routes/rooms.routes')
const categoriesRoutes = require('./routes/categories.routes')
const imagesRoutes = require('./models/image.model')

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
app.use('/rooms', roomsRoutes)
app.use('/categories', categoriesRoutes)
app.use('/images', imagesRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
