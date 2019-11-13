'use strict';
module.exports = (sequelize, DataTypes) => {
  const NLTK = sequelize.define('NLTK', {
    atr_positivo: DataTypes.STRING,
    atr_negativo: DataTypes.STRING,
    produtoId: DataTypes.INTEGER
  }, {});
  NLTK.associate = function(models) {
    NLTK.belongsTo(models.Produto, {
      foreignKey: 'produtoId',
    });
  };
  return NLTK;
};