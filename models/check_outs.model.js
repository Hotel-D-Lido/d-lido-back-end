const Sequelize = require('sequelize')
const Booking = require('./booking.model')
const Connection = require('./connection')

const connection = new Connection()
const Check_out = connection.sequelize.define(
  'CheckOut',
  {
    check_out_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id: Sequelize.STRING,
    check_out_date: Sequelize.DATE
  },
  {
    tableName: 'check_outs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)
Check_out.hasOne(Booking)
module.exports = Check_out
