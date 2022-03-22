const bcrypt = require('bcrypt')
const Equipment = require('../models/equipment.model')

module.exports = class EquipmentsController {
  async list (req, res, next) {
    const list = await Equipment.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const publicUser = await Equipment.findByPk(id)
    res.send(publicUser)
  }

  async update (req, res, next) {
    const id = req.params.id

    const {
      room_id,
      feature_id
    } = req.body

    // TODO: Agregar validaciones
    if (!name) res.status(400).send({ message: 'Nombre es requerido' })

    const updateResult = await Equipment.update(
      {
        room_id,
        feature_id
      },
      {
        where: {
          equipment_id: id
        }
      }
    )

    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const {
      room_id,
      feature_id
    } = req.body

    // TODO: Agregar validaciones
    if (!name) return res.status(400).send({ message: 'Nombre es requerido' })

    try {
      const publicUser = await Equipment.create({
        room_id,
        feature_id
      })
      res.status(201).send(publicUser)
    } catch (error) {

    }
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Equipment.destroy({
      where: {
        equipment_id: id
      }
    })

    // TODO: Agregar validaciones.
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
