const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const publicUserRoutes = require('./routes/public-user.routes')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Up and running')
})

app.use('/users', publicUserRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
