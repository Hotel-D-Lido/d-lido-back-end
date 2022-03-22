const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Images = connection.sequelize.define(
  'Images',
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

module.exports = Images
