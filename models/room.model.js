const Sequelize = require('sequelize')
const Connection = require('./connection')
const categorie = require('../models/categorie.model')

const connection = new Connection()
const Rooms = connection.sequelize.define(
  'Room',
  {
    room_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING,
    category_id: Sequelize.INTEGER
  },
  {
    tableName: 'rooms',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)
// iria lo que es la fk de una tabla a otra
Rooms.hasOne(categorie)

module.exports = Rooms
