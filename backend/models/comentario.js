'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define('Comentario', {
    link: DataTypes.STRING,
    comentario: DataTypes.STRING,
    produtoId: DataTypes.INTEGER
  }, {});
  Comentario.associate = function(models) {
    Comentario.belongsTo(models.Produto, {
      foreignKey: 'produtoId',
    });
  };
  return Comentario;
};