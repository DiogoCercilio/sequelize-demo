const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../repository/MysqlRepository');

const Post = sequelize.define('post', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
});

module.exports = Post;