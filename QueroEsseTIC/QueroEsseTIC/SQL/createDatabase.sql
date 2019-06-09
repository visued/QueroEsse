CREATE TABLE Usuario (
  idUsuario SERIAL,
  nome CHAR(100) NOT NULL,
  sobrenome CHAR(100) NOT NULL,
  apelido CHAR(20) NOT NULL,
  senha CHAR(100) NOT NULL,
  PRIMARY KEY(idUsuario)
);

CREATE TABLE Comentario (
  idComentario SERIAL,
  comentario CHAR(400), 
  PRIMARY KEY(idComentario)
);

CREATE TABLE Produto (
  idProduto SERIAL,
  idUsuario INTEGER,
  idComentario INTEGER,
  nomeProduto CHAR(100) NOT NULL,
  avaliacao INTEGER NOT NULL,
  especificacao CHAR(600) NOT NULL,
  modelo CHAR(20) NOT NULL,
  PRIMARY KEY(idProduto, idUsuario, idComentario),
  CONSTRAINT produto_idusuario_fk FOREIGN KEY(idUsuario)
  REFERENCES Usuario(idUsuario),
  CONSTRAINT produto_idcomentario_fk FOREIGN KEY(idComentario)
  REFERENCES Comentario(idComentario) 
);

