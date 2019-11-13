'use strict';
module.exports = (sequelize, DataTypes) => {
  const NLTK = sequelize.define('NLTK', {
    atr_positivo: DataTypes.STRING,
    atr_negativo: DataTypes.STRING
  }, {});
  NLTK.associate = function(models) {
    // associations can be defined here

  };
  return NLTK;
};