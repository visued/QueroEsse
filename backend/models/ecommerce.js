'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ecommerce = sequelize.define('Ecommerce', {
    link: DataTypes.STRING,
    ecommerce: DataTypes.STRING,
    produtoId: DataTypes.INTEGER
  }, {});
  Ecommerce.associate = function(models) {
    Ecommerce.belongsTo(models.Produto, {
      foreignKey: 'produtoId',
    });
  };
  return Ecommerce;
};