/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_produto', {
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(tb_produto_id_produto_seq::regclass)'
    },
    id_agendamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_agendamento',
        key: 'id_agendamento'
      }
    },
    id_ecommerce: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_ecommerce',
        key: 'id_ecommerce'
      }
    },
    id_comentario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_comentario',
        key: 'id_comentario'
      }
    },
    id_nltk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_resultado_nltk',
        key: 'id_nltk'
      }
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    especificacao_tecnica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    criadoem: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_produto'
  });
};
