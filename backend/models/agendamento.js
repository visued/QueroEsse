'use strict';
module.exports = (sequelize, DataTypes) => {
  const Agendamento = sequelize.define('Agendamento', {
    status_agendamento: DataTypes.STRING,
    link: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Esse campo não pode ser vazio, insira um link!'
          }
        }

    },
    ecommerce: DataTypes.STRING,
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Esse campo não pode ser vazio, insira o codigo do usuário!'
        }
      }
    }
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