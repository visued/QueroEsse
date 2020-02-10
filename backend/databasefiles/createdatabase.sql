CREATE TABLE tb_usuario (
  id_usuario   INTEGER,
  nome         VARCHAR(100),
  apelido      VARCHAR(100),
  googleuserid VARCHAR(200),
  tipo         INTEGER,
  uf           CHAR(2),
  cidade       VARCHAR(100),
  email        VARCHAR(100),
  PRIMARY KEY(id_usuario)
);

CREATE TABLE tb_comentario (
  id_comentario INTEGER,
  id_produto    INTEGER,
  link          VARCHAR(100),
  comentario    VARCHAR(100),
  PRIMARY KEY(id_comentario),
  CONSTRAINT fk_id_produto FOREIGN KEY(id_produto)
	REFERENCES tb_produto(id_produto)
);

CREATE TABLE tb_ecommerce (
  id_ecommerce INTEGER,
  id_produto   INTEGER,
  link         VARCHAR(100),
  ecommerce    VARCHAR(25),
  PRIMARY KEY(id_ecommerce),
  CONSTRAINT fk_id_produto FOREIGN KEY(id_produto)
	REFERENCES tb_produto(id_produto)
);

CREATE TABLE NltkStopWords (
  id_produto INTEGER,
  atributo   VARCHAR(50),
  FOREIGN KEY(id_produto)
	REFERENCES tb_produto(id_produto)
);

CREATE TABLE nltk (
  id_nltk          INTEGER,
  TESTE_id_produto INTEGER,
  atr_positivo     VARCHAR(50),
  atr_negativo     VARCHAR(50),
  PRIMARY KEY(id_nltk),
  CONSTRAINT fk_id_produto FOREIGN KEY(TESTE_id_produto)
	REFERENCES tb_produto(id_produto)
);


CREATE TABLE tb_agendamento (
  id_agendamento     INTEGER,
  id_usuario         INTEGER,
  status_agendamento VARCHAR(10),
  ecommerce          VARCHAR(25),
  link               VARCHAR(200),
  PRIMARY KEY(id_agendamento),
  CONSTRAINT fk_id_usuario FOREIGN KEY(id_usuario)
	REFERENCES tb_usuario(id_usuario)
);


CREATE TABLE tb_produto (
  id_produto            INTEGER UNIQUE,
  id_agendamento        INTEGER,
  descricao 	          VARCHAR(100),
  foto 		              VARCHAR(100),
  modelo 	              VARCHAR(20),
  nome 	                VARCHAR(100),
  rating 	              FLOAT,
  especificacao_tecnica VARCHAR(500),
  CONSTRAINT fk_id_agendamento FOREIGN KEY(id_agendamento)
	REFERENCES tb_agendamento(id_agendamento)
);


