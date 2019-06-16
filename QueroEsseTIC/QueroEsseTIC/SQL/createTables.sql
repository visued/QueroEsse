CREATE TABLE Usuario (
  idUsuario SERIAL,
  nome VARCHAR(100) NOT NULL,
  sobrenome VARCHAR(100) NOT NULL,
  apelido VARCHAR(20) NOT NULL,
  senha VARCHAR(100) NOT NULL,
  PRIMARY KEY(idUsuario)
);

CREATE TABLE Comentario (
  idComentario SERIAL,
  comentario VARCHAR(400), 
  PRIMARY KEY(idComentario)
);

CREATE TABLE Produto (
  idProduto SERIAL,
  idUsuario INTEGER,
  idComentario INTEGER,
  nomeProduto VARCHAR(100) NOT NULL,
  avaliacao INTEGER NOT NULL,
  especificacao VARCHAR(600) NOT NULL,
  modelo VARCHAR(20) NOT NULL,
  PRIMARY KEY(idProduto, idUsuario, idComentario),
  CONSTRAINT produto_idusuario_fk FOREIGN KEY(idUsuario)
  REFERENCES Usuario(idUsuario),
  CONSTRAINT produto_idcomentario_fk FOREIGN KEY(idComentario)
  REFERENCES Comentario(idComentario) 
);

