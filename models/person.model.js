const Sequelize = require('sequelize');
const Connection = require('./connection');

const connection = new Connection();
const Person = connection.sequelize.define('Person', {
    'persona_id': { type: Sequelize.INTEGER, primaryKey: true },
    'estado_id': Sequelize.INTEGER,
    'nombre': Sequelize.STRING,
    'apellido_razon_social': Sequelize.STRING,
    'fecha_nac_constitucion': Sequelize.STRING,
    'tipo_documento': Sequelize.STRING,
    'numero_documento': Sequelize.STRING,
    'correo': Sequelize.STRING,
    'numero_contacto': Sequelize.STRING,
}, {
    tableName: 'persona',
    timestamps: false,
});

module.exports = Person;
