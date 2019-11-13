'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    descricao: DataTypes.STRING,
    foto: DataTypes.STRING,
    modelo: DataTypes.STRING,
    nome: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    especificacao_tecnica: DataTypes.STRING
  },
   {});
  Produto.associate = function(models) {
    // associations can be defined here
    Produto.hasMany(models.Comentario, {
      foreignKey: 'produtoId',
    });
    Produto.hasMany(models.NLTK, {
      foreignKey: 'produtoId',
    });
    Produto.hasMany(models.Ecommerce, {
      foreignKey: 'produtoId',
    });
    Produto.belongsTo(models.Agendamento, {
      foreignKey: 'produtoId',
    });
  };
  return Produto;
};