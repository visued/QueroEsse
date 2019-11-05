/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_comentario', {
    id_comentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comentario: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_comentario'
  });
};
