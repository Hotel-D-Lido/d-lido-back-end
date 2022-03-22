const Sequelize = require('sequelize')
const Connection = require('./connection')
const Category = require('../models/category.model')

const connection = new Connection()
const Room = connection.sequelize.define(
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

Room.hasOne(Category)

module.exports = Room
