const categories = require('../models/categorie.model')

module.exports = class categoriesController {
  async list (req, res, next) {
    const list = await categories.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const categorie = await categories.findByPk(id)
    res.send(categorie)
  }

  async update (req, res, next) {
    const id = req.params.id
    const { name, guest_total, price } = req.body
    const updateResult = await categories.update(
      {
        name,
        guest_total,
        price
      },
      {
        where: {
          category_id: id
        }
      }
    )
    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const { name, guest_total, price } = req.body
    const categorie = await categories.create({
      name,
      guest_total,
      price
    })
    res.status(201).send(categorie)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await categories.destroy({
      where: {
        category_id: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
