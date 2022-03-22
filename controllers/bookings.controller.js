const Booking = require('../models/booking.model')

module.exports = class BookingsController {
  async list (req, res, next) {
    const list = await Booking.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const booking = await Booking.findByPk(id)
    res.send(booking)
  }

  async update (req, res, next) {
    const id = req.params.id
    const { start_date: StartDate, end_date: EndDate, status } = req.body
    const updateResult = await Booking.update(
      {
        start_date: StartDate,
        end_date: EndDate,
        status

      },
      {
        where: {
          booking_id: id
        }
      }
    )
    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const {
      start_date: StartDate,
      end_date: EndDate,
      status
    } = req.body
    const booking = await Booking.create({
      start_date: StartDate,
      end_date: EndDate,
      status

    })
    res.status(201).send(booking)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Booking.destroy({
      where: {
        booking_id: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
