const bcrypt = require('bcrypt')
const Check_out = require('../models/checkouts.model')

module.exports = class Check_outssController {
  async list (req, res, next) {
    const list = await Check_out.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const publicUser = await Check_out.findByPk(id)
    res.send(publicUser)
  }

  async update (req, res, next) {
    const id = req.params.id

    const {
      booking_id,
      check_out_date
    } = req.body

    // TODO: Agregar validaciones

    const updateResult = await Check_out.update(
      {
        booking_id,
        check_out_date
      },
      {
        where: {
          check_out_id: id
        }
      }
    )

    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const {
      booking_id,
      check_out_date
    } = req.body

    // TODO: Agregar validaciones

    try {
      const publicUser = await Check_out.create({
        booking_id,
        check_out_date
      })
      res.status(201).send(publicUser)
    } catch (error) {

    }
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Check_out.destroy({
      where: {
        guestcheck_out_id: id
      }
    })

    // TODO: Agregar validaciones.
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
