/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_ecommerce', {
    id_ecommerce: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tb_produto_id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    link: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ecommerce: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_ecommerce'
  });
};
