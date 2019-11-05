/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_usuario', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_agendamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apelido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    googleuserid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    googletokenid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_usuario'
  });
};
