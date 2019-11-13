'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    apelido: DataTypes.STRING,
    googleuserid: DataTypes.STRING,
    email: DataTypes.STRING,
    tipo: DataTypes.STRING,
    uf: DataTypes.STRING,
    cidade: DataTypes.STRING
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
    Usuario.hasMany(models.Agendamento, {
      foreignKey: 'usuarioId',
    });
  };
  return Usuario;
};