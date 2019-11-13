'use strict';
module.exports = (sequelize, DataTypes) => {
  const Agendamento = sequelize.define('Agendamento', {
    status_agendamento: DataTypes.STRING,
    link: DataTypes.STRING,
    ecommerce: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {});
  Agendamento.associate = function(models) {
    Agendamento.belongsTo(models.Usuario, {
      foreignKey: 'usuarioId',
    });
    Agendamento.hasMany(models.Produto, {
      foreignKey: 'agendamentoId',
    });
  };
  return Agendamento;
};