const Image = require('../models/image.model')

module.exports = class ImagesController {
  async list (req, res, next) {
    const list = await Image.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const image = await Image.findByPk(id)
    res.send(image)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      content
    } = req.body
    const updateResult = await Image.update(
      {
        content
      }, {
        where: {
          image_id: id
        }
      }
    )
    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const { content } = req.body
    const image = await Image.create({
      content
    })
    res.status(201).send(image)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Image.destroy({
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
