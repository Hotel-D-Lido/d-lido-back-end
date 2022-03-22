const Sequelize = require('sequelize')
const Connection = require('./connection')
const { hasOne } = require('./room.model')
const { hasOne } = require('./feature.model')

const connection = new Connection()
const Equipment = connection.sequelize.define(
  'Equipment',
  {
    equipment_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    room_id: Sequelize.STRING,
    feature: Sequelize.STRING
  },
  {
    tableName: 'equipment',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)
Equipment.hasOne(Rooms)
Equipment.hasOne(Feature)
module.exports = Equipment