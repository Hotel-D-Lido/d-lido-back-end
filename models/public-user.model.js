const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const PublicUser = connection.sequelize.define(
  'PublicUser',
  {
    cliente_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: Sequelize.STRING,
    apellido_razon_social: Sequelize.STRING,
    fecha_nacimiento_constitucion: Sequelize.DATE,
    tipo_de_documento: Sequelize.STRING,
    codigo_de_documento: Sequelize.INTEGER,
    correo: Sequelize.STRING,
    numero_telefono: Sequelize.INTEGER,
    nombre_usuario: Sequelize.STRING,
    password: Sequelize.STRING
  },
  {
    tableName: 'usuario_publico',
    timestamps: false
  }
)

module.exports = PublicUser
