'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ecommerce = sequelize.define('Ecommerce', {
    link: DataTypes.STRING,
    ecommerce: DataTypes.STRING
  }, {});
  Ecommerce.associate = function(models) {
    // associations can be defined here
  };
  return Ecommerce;
};