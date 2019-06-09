/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.quereesse.cadProduto;

import br.com.quereesse.BD;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
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
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
