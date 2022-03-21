const Sequelize = require('sequelize')
const Connection = require('./connection')
const Room = require('../models/room.model')

const connection = new Connection()
const images = connection.sequelize.define(
  'images',
  {
    images_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: Sequelize.STRING
  },

  {
    tableName: 'images',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)
images.hasOne(Room)
module.exports = images
