/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_agendamento', {
    id_agendamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_usuario',
        key: 'id_usuario'
      }
    },
    status_agendamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    finalizadoem: {
      type: DataTypes.DATE,
      allowNull: true
    },
    agendadoem: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_agendamento'
  });
};
