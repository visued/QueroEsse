/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_resultado_nltk', {
    id_nltk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atr_positivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    atr_negativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_resultado_nltk'
  });
};
