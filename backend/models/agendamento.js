'use strict';
module.exports = (sequelize, DataTypes) => {
  const Agendamento = sequelize.define('Agendamento', {
    status_agendamento: DataTypes.STRING
  }, {});
  Agendamento.associate = function(models) {
    // associations can be defined here
    Agendamento.belongsTo(models.Usuario, {
      foreignKey: 'usuarioId',
    });
    Agendamento.hasMany(models.Produto, {
      foreignKey: 'produtoId',
    });
  };
  return Agendamento;
};