const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Conversation', {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    response: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
};
