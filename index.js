const express = require('express')
const cors = require('cors')
const app = express()
const Connection = require('./models/connection')
const { associations } = require('./models/associations')

const PORT = process.env.PORT || 3000

const authenticationRoutes = require('./routes/authentication.routes')
const bookingsRoutes = require('./routes/bookings.routes')
const categoriesRoutes = require('./routes/categories.routes')
const checkInsRoutes = require('./routes/check-ins.routes')
const checkOutsRoutes = require('./routes/check-outs.routes')
const equipmentsRoutes = require('./routes/equipments.routes')
const featuresRoutes = require('./routes/features.routes')
const guestsRoutes = require('./routes/guests.routes')
const imagesRoutes = require('./routes/images.routes')
const roomsRoutes = require('./routes/rooms.routes')

app.use(
  cors({
    origin: ['http://localhost:4000'],
    credentials: true
  })
)

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Up and running')
})

app.use('/authentication', authenticationRoutes)
app.use('/bookings', bookingsRoutes)
app.use('/categories', categoriesRoutes)
app.use('/check-ins', checkInsRoutes)
app.use('/check-outs', checkOutsRoutes)
app.use('/equipments', equipmentsRoutes)
app.use('/features', featuresRoutes)
app.use('/guests', guestsRoutes)
app.use('/images', imagesRoutes)
app.use('/rooms', roomsRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
  const connection = new Connection()
  connection.sequelize
    .authenticate()
    .then(() => {
      console.log('Database connected')
      associations().then(() => {
        console.log('Models associated')
      })
    })
    .catch((error) => console.error(error))
})
