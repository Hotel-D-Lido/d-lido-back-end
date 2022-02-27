const Sequelize = require('sequelize');
const Connection = require('./connection');

const connection = new Connection();
const example = connection.sequelize.define('example', {
    'id': { type: Sequelize.INTEGER, primaryKey: true },
    'text': Sequelize.STRING
});

example.sync({ force: true }).then(() => console.info('Example table created.'));

module.exports = example;
