'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define('Comentario', {
    link: DataTypes.STRING,
    comentario: DataTypes.STRING
  }, {});
  Comentario.associate = function(models) {
    // associations can be defined here
  };
  return Comentario;
};