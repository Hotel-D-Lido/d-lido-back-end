const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const State = connection.sequelize.define('State', {
  estado_id: { type: Sequelize.INTEGER, primaryKey: true },
  nombre_estado: Sequelize.STRING
}, {
  tableName: 'cat_estado',
  timestamps: false
})

module.exports = State
