/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.quereesse.cadProduto;

import br.com.quereesse.BD;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author vsued
 */
public class ProdutoDAOImpl implements ProdutoDAO{

    @Override
    public boolean insere(Produto produto) {
            Connection conexao = BD.conecta();
            if (conexao == null){
                return false;
            }
            else {
                System.out.println("Conectador com sucesso!");
                String sql = "insert into produto (idUsuario, idComentario, nomeProduto, avaliacao, especificacao, modelo) values (?, ?, ?, ?, ?, ?)";
                try {
                    // cria canal de comunicação para executar SQL
                    PreparedStatement canal = conexao.prepareStatement(sql);
                    // coloca os valores dos ?
                    
                    canal.setInt(1, produto.getUsuarioLogado());
                    canal.setInt(2, produto.getComentario().getIdComentario());
                    canal.setString(3, produto.getNomeProduto());
                    canal.setInt(4, produto.getAvaliacao());
                    canal.setString(5, produto.getEspecificacao());
                    canal.setString(6, produto.getModelo());
                    System.out.println(sql);
                    // executa o comando no banco
                    canal.execute();
                    return true;
                }
                catch(SQLException e){
                    System.out.println(e.getMessage());
                    return false;
                }
            }
    }

    @Override
    public boolean remove(Produto produto) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean atualiza(Produto produto) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ArrayList<Produto> consulta() {
            Connection conexao = BD.conecta();
            if (conexao == null){
                return null;
            }
            else {
                String sql = "select a.nomeproduto, a.avaliacao, a.especificacao, a.modelo, b.comentario from produto a, comentario b where a.idcomentario = b.idcomentario";
                try {
                    // cria canal de comunicação para executar SQL
                    Statement canal = conexao.createStatement();
                    // coloca os valores dos ?
                    ResultSet ponteiro = canal.executeQuery(sql);
                    ArrayList<Produto> produtos = new ArrayList();
                    while (ponteiro.next()){
                        Produto produto = new Produto();
                        produto.setNomeProduto(ponteiro.getString("nomeproduto"));
                        produto.setAvaliacao(ponteiro.getInt("avaliacao"));
                        produto.setEspecificacao(ponteiro.getString("especificacao"));
                        produto.setModelo(ponteiro.getString("modelo"));
                        produto.setDscComentario(ponteiro.getString("comentario"));
                        produtos.add(produto);
                    }
                    // executa o comando no banco
                    canal.execute(sql);
                    
                    return produtos;
                }
                catch(SQLException e){
                    System.out.println(e.getMessage());
                    return null;
                }
            } 
    }
    
}
