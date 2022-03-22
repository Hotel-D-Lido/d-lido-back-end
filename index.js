const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

const guestsRoutes = require('./routes/guests.routes')
const roomsRoutes = require('./routes/rooms.routes')
const categoriesRoutes = require('./routes/categories.routes')
const imagesRoutes = require('./routes/images.routes')
const equipmentsRoutes = require('./routes/equipments.routes')
const checkInsRoutes = require('./routes/check-ins.routes')
const checkOutsRoutes = require('./routes/check-outs.routes')

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
app.use('/equipments', equipmentsRoutes)
app.use('/check-ins', checkInsRoutes)
app.use('/check-outs', checkOutsRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
