/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.quereesse.cadComentario;

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
public class ComentarioDAOImpl implements ComentarioDAO{

    @Override
    public boolean insere(Comentario comentario) {
            Connection conexao = BD.conecta();
            if (conexao == null){
                return false;
            }
            else {
                System.out.println("Conectou com sucesso");
                String sql = "insert into comentario (comentario) values (?)";
                try {
                    // cria canal de comunicação para executar SQL
                    PreparedStatement canal = conexao.prepareStatement(sql);
                    // coloca os valores dos ?
                    canal.setString(1, comentario.getComentario());
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
    public boolean remove(Comentario comentario) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean atualiza(Comentario comentario) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ArrayList<Comentario> consulta() {
         Connection conexao = BD.conecta();
            if (conexao == null){
                return null;
            }
            else {
                String sql = "select * from comentario";
                try {
                    // cria canal de comunicação para executar SQL
                    Statement canal = conexao.createStatement();
                    // coloca os valores dos ?
                    ResultSet ponteiro = canal.executeQuery(sql);
                    ArrayList<Comentario> comentarios = new ArrayList();
                    while (ponteiro.next()){
                        Comentario comentario = new Comentario();
                        comentario.setIdComentario(ponteiro.getInt("idComentario"));
                        comentario.setComentario(ponteiro.getString("comentario"));
                        comentarios.add(comentario);
                    }
                    // executa o comando no banco
                    canal.execute(sql);
                    return comentarios;
                }
                catch(SQLException e){
                    System.out.println(e.getMessage());
                    return null;
                }
            }
    }
     
}
