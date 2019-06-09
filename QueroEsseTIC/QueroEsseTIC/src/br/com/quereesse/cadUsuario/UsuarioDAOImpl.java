package br.com.quereesse.cadUsuario;

import br.com.quereesse.BD;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
public class UsuarioDAOImpl implements UsuarioDAO{
    
    @Override
    public boolean insere(Usuario usuario) {
        Connection conexao = BD.conecta();
        if (conexao == null) {
            return false;
        } else {
            String sql = "insert into usuario (nome, sobrenome, apelido, senha) values (?, ?, ?, ?)";
        try {
            //cria canal de comunicação para executar SQL
            PreparedStatement canal = conexao.prepareStatement(sql);
            //coloca os valores dos ?
            canal.setString(1, usuario.getNome());
            canal.setString(2, usuario.getSobrenome());
            canal.setString(3, usuario.getApelido());
            canal.setString(4, usuario.getSenha());
            
            //executa os comandos do banco
            canal.execute();            
                    
            return true;
        }catch (SQLException e){
            System.out.println(e.getMessage());
            return false;
        }
     
        }
    }
       
    @Override
    public boolean remove(Usuario usuario) {
        Connection con = BD.conecta();
        if (con == null) {
            return false;
        } else {
            String sql = "delete from usuario where apelido = ?";
            try {
                PreparedStatement canal = con.prepareStatement(sql);
                canal.setString(3, usuario.getApelido());
                canal.execute();
                return true;

            } catch (SQLException e) {
                System.out.println(e.getMessage());
                return false;
            }
        }
    }

    @Override
    public boolean atualiza(Usuario usuario) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ArrayList<Usuario> consulta() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    }


    