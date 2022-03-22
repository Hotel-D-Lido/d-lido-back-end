const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const Guest = require('../models/guest.model')

module.exports = class AuthenticationController {
  async login (req, res) {
    const { email, password } = req.body

    // Buscar huésped por email (el email es único)
    const guest = await Guest.findOne({
      where: {
        email: email
      }
    })

    if (!guest) { return res.status(400).send({ message: 'Usuario y/o contraseña incorrectos' }) }

    const match = await bcrypt.compare(password, guest.password)

    if (!match) { return res.status(400).send({ message: 'Usuario y/o contraseña incorrectos' }) }

    const token = jwt.sign({
      guest_id: guest.guest_id
    }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    })

    res.status(200).send({ token })
  }
}
