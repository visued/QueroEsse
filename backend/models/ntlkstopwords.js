'use strict';
module.exports = (sequelize, DataTypes) => {
  const NtlkStopWords = sequelize.define('NtlkStopWords', {
    atributo: DataTypes.STRING,
    frequencia: DataTypes.INTEGER,
    produtoId: DataTypes.INTEGER
  }, {});
  NtlkStopWords.associate = function(models) {
    // associations can be defined here
  };
  return NtlkStopWords;
};