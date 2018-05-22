'use strict';
module.exports = (sequelize, DataTypes) => {
  var Snowboard = sequelize.define('Snowboard', {
    brand: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Snowboard.associate = function(models) {
    // associations can be defined here
  };
  return Snowboard;
};