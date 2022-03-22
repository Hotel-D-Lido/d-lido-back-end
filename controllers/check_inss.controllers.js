const bcrypt = require('bcrypt')
const Checkins = require('../models/chek_ins.model')

module.exports = class Check_inssController {
  async list (req, res, next) {
    const list = await Checkins.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const publicUser = await Checkins.findByPk(id)
    res.send(publicUser)
  }

  async update (req, res, next) {
    const id = req.params.id

    const {
      booking_id,
      check_in_date
    } = req.body

    // TODO: Agregar validaciones

    const updateResult = await Checkins.update(
      {
        booking_id,
        check_in_date
      },
      {
        where: {
          check_in_id: id
        }
      }
    )

    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const {
      booking_id,
      check_in_date
    } = req.body

    // TODO: Agregar validaciones

    try {
      const publicUser = await Checkins.create({
        booking_id,
        check_in_date
      })
      res.status(201).send(publicUser)
    } catch (error) {

    }
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Checkins.destroy({
      where: {
        check_in_id: id
      }
    })

    // TODO: Agregar validaciones.
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
