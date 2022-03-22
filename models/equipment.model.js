const Sequelize = require('sequelize')
const Connection = require('./connection')

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
    feature_id: Sequelize.STRING
  },
  {
    tableName: 'equipment',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Equipment
