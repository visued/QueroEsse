CREATE TABLE tb_agendamento (
  id_agendamento SERIAL,
  id_usuario VARCHAR(100),
  status_agendamento VARCHAR(10),
  finalizadoem TIMESTAMP,
  agendadoem TIMESTAMP,
  PRIMARY KEY(id_agendamento),
  CONSTRAINT tb_agendamento_fk_id_usuario FOREIGN KEY(id_usuario)
	REFERENCES a(id_usuario)
);

CREATE TABLE tb_comentario (
  id_comentario SERIAL,
  id_produto INTEGER,
  link VARCHAR(100),
  comentario VARCHAR(100),
  PRIMARY KEY(id_comentario)
);

CREATE TABLE tb_ecommerce (
  id_commerce SERIAL,
  tb_produto_id_produto INTEGER UNSIGNED NOT,
  link INTEGER,
  ecommerce INTEGER,
  PRIMARY KEY(id_commerce)
);

CREATE TABLE tb_produto (
  id_produto SERIAL,
  id_agendamento INTEGER,
  id_ecommerce   INTEGER,
  id_comentario  INTEGER,
  id_ntlk	 INTEGER,
  descricao 	 VARCHAR(100),
  foto 		 VARCHAR(100),
  modelo 	 VARCHAR(20),
  nome 	         VARCHAR(100),
  rating 	 NUMBER,
  especificacao_tecnica VARCHAR(500),
  criadoem DATETIME,
  CONSTRAINT tb_produto_fk_id_comentario FOREIGN KEY(id_comentario)
	REFERENCES (tb_comentario)
  CONSTRAINT tb_produto_fk_id_ntlk FOREIGN KEY(id_ntlk)
	REFERENCES (tb_resultado_ntlk)
  CONSTRAINT tb_produto_fk_id_agendamento FOREIGN KEY(id_agendamento)
	REFERENCES (tb_agendamento)
  CONSTRAINT tb_produto_fk_id_ecommerce FOREIGN KEY(id_commerce)
	REFERENCES (tb_ecommerce)
);

CREATE TABLE tb_resultado_nltk (
  id_nltk SERIAL,
  id_produto INTEGER,
  atr_positivo VARCHAR(50),
  atr_negativo VARCHAR(50),
  PRIMARY KEY(id_nltk),

);

CREATE TABLE tb_usuario (
  id_usuario SERIAL,
  id_agendamento INTEGER,
  nome INTEGER,
  apelido INTEGER,
  googleuserid VARCHAR(200),
  googletokenid VARCHAR(200),
  tipo INTEGER,
  email VARCHAR(100),
  uf VARCHAR(2),
  cidade VARCHAR(100),
  PRIMARY KEY(id_usuario)
);

