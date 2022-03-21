const Category = require('../models/category.model')

module.exports = class CategoriesController {
  async list (req, res, next) {
    const list = await Category.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const publicUser = await Category.findByPk(id)
    res.send(publicUser)
  }

  async update (req, res, next) {
    const id = req.params.id
    const { name, guest_total: guestTotal, price } = req.body
    const updateResult = await Category.update(
      {
        name,
        guest_total: guestTotal,
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
    const { name, guest_total: guestTotal, price } = req.body
    const publicUser = await Category.create({
      name,
      guest_total: guestTotal,
      price
    })
    res.status(201).send(publicUser)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Category.destroy({
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
