const rooms = require('../models/room.model')
const room = require('../models/room.model')

module.exports = class RoomsController {
  async list (req, res, next) {
    const list = await room.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const publicUser = await room.findByPk(id)
    res.send(publicUser)
  }

  async update (req, res, next) {
    const id = req.params.id
    const { name, description, status, category_id: categoryId } = req.body
    const updateResult = await rooms.update(
      {
        name,
        description,
        status,
        category_id: categoryId
      },
      {
        where: {
          room_id: id
        }
      }
    )
    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const { name, description, status, category_id: categoryId } = req.body
    const room = await rooms.create({
      name,
      description,
      status,
      category_id: categoryId
    })
    res.status(201).send(room)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await rooms.destroy({
      where: {
        room_id: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
