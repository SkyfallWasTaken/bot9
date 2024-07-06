const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

const Conversation = require('./conversation')(sequelize);

module.exports = { sequelize, Conversation };
