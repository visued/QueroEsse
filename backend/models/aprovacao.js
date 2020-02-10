'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aprovacao = sequelize.define('Aprovacao', {
    palavra: DataTypes.STRING,
    estado_aprovacao: DataTypes.STRING,
    produtoId: DataTypes.INTEGER
  }, {});
  Aprovacao.associate = function(models) {
    Aprovacao.belongsTo(models.Produto, {
      foreignKey: 'produtoId',
    });
  };
  return Aprovacao;
};