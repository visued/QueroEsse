CREATE TABLE tb_usuario (
  id_usuario SERIAL,
  id_agendamento INTEGER,
  nome VARCHAR(100),
  apelido INTEGER,
  googleuserid VARCHAR(200),
  googletokenid VARCHAR(200),
  tipo INTEGER,
  email VARCHAR(100),
  uf VARCHAR(2),
  cidade VARCHAR(100),
  PRIMARY KEY(id_usuario)
);

CREATE TABLE tb_comentario (
  id_comentario SERIAL,
  id_produto INTEGER,
  link VARCHAR(100),
  comentario VARCHAR(100),
  PRIMARY KEY(id_comentario)
);

CREATE TABLE tb_ecommerce (
  id_ecommerce SERIAL,
  tb_produto_id_produto INTEGER,
  link INTEGER,
  ecommerce VARCHAR(100),
  PRIMARY KEY(id_ecommerce)
);



CREATE TABLE tb_resultado_nltk (
  id_nltk SERIAL,
  id_produto INTEGER,
  atr_positivo VARCHAR(50),
  atr_negativo VARCHAR(50),
  PRIMARY KEY(id_nltk)
);


CREATE TABLE tb_agendamento (
  id_agendamento SERIAL,
  id_usuario INTEGER,
  status_agendamento VARCHAR(10),
  finalizadoem TIMESTAMP,
  agendadoem TIMESTAMP,
  PRIMARY KEY(id_agendamento),
  CONSTRAINT tb_agendamento_fk_id_usuario FOREIGN KEY(id_usuario)
	REFERENCES tb_usuario(id_usuario)
);


CREATE TABLE tb_produto (
  id_produto SERIAL,
  id_agendamento INTEGER,
  id_ecommerce   INTEGER,
  id_comentario  INTEGER,
  id_nltk	 INTEGER,
  descricao 	 VARCHAR(100),
  foto 		 VARCHAR(100),
  modelo 	 VARCHAR(20),
  nome 	         VARCHAR(100),
  rating 	 FLOAT,
  especificacao_tecnica VARCHAR(500),
  criadoem TIMESTAMP,
  CONSTRAINT tb_produto_fk_id_comentario FOREIGN KEY(id_comentario)
	REFERENCES tb_comentario(id_comentario),
  CONSTRAINT tb_produto_fk_id_nltk FOREIGN KEY(id_nltk)
	REFERENCES tb_resultado_nltk(id_nltk),
  CONSTRAINT tb_produto_fk_id_agendamento FOREIGN KEY(id_agendamento)
	REFERENCES tb_agendamento(id_agendamento),
  CONSTRAINT tb_produto_fk_id_ecommerce FOREIGN KEY(id_ecommerce)
	REFERENCES tb_ecommerce(id_ecommerce)
);
