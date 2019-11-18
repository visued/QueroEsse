'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Esse campo não pode ser vazio, insira uma descrição!'
        }
      }
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: false,      
      validate: {
        notEmpty: {
          msg: 'Esse campo não pode ser vazio, insira o b64 da imagem!'
        }
      }
    }, 
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,      
      validate: {
        notEmpty: {
          msg: 'Esse campo não pode ser vazio, insira o modelo do produto!'
        }
      }
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,      
      validate: {
        notEmpty: {
          msg: 'Esse campo não pode ser vazio, insira o nome do produto!'
        }
      }      
    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: false,      
      validate: {
        notEmpty: {
          msg: 'Esse campo não pode ser vazio, insira o rating do produto!'
        }
      }  
    },
    especificacao_tecnica: {
      type: DataTypes.STRING,
      allowNull: false,      
      validate: {
        notEmpty: {
          msg: 'Esse campo não pode ser vazio, insira a especificacao do produto!'
        }
      }
    },
    agendamentoId: DataTypes.INTEGER
  }, {});
  Produto.associate = function(models) {
    Produto.hasMany(models.Comentario, {
      foreignKey: 'produtoId',
    });
    Produto.hasMany(models.NLTK, {
      foreignKey: 'produtoId',
    });
    Produto.hasMany(models.Ecommerce, {
      foreignKey: 'produtoId',
    });
    Produto.hasMany(models.Aprovacao, {
      foreignKey: 'produtoId',
    });
    Produto.belongsTo(models.Agendamento, {
      foreignKey: 'agendamentoId',
    });
  };

  return Produto;
};