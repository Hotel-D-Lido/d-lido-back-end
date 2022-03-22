const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Checkins = connection.sequelize.define(
  'Checkins',
  {
    check_in_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id: Sequelize.STRING,
    check_in_date: Sequelize.DATE

  },
  {
    tableName: 'check_ins',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)
Checkins.hasOne(booking)
module.exports = Checkins
