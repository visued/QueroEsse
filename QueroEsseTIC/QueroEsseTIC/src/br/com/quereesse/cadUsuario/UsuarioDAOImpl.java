package br.com.quereesse.cadUsuario;

import br.com.quereesse.BD;
import br.com.quereesse.cadComentario.Comentario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
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
            String sql = "delete from usuario where idusuario = ?";
            try {
                PreparedStatement canal = con.prepareStatement(sql);
                canal.setInt(1, usuario.getIdUsuario());
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
        Connection con = BD.conecta();
       if (con == null){
           return false;
       }
       else{
           String sql = "update usuario set apelido = ? where idusuario = ?";
           try{
               //cria canal de comunicação para executar sql
               PreparedStatement canal = con.prepareStatement(sql);
               //coloca os valores dos ?
               canal.setString(1, usuario.getApelido());
               canal.setInt(2, usuario.getIdUsuario());
               //executa o cmd no banco
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
    public ArrayList<Usuario> consulta() {
            Connection conexao = BD.conecta();
            if (conexao == null){
                return null;
            }
            else {
                String sql = "select idusuario,apelido,senha from usuario";
                try {
                    // cria canal de comunicação para executar SQL
                    Statement canal = conexao.createStatement();
                    // coloca os valores dos ?
                    ResultSet ponteiro = canal.executeQuery(sql);
                    ArrayList<Usuario> usuarios = new ArrayList();
                    while (ponteiro.next()){
                        Usuario usuario = new Usuario();
                        usuario.setIdUsuario(ponteiro.getInt("idusuario"));
                        usuario.setApelido(ponteiro.getString("apelido"));
                        usuario.setSenha(ponteiro.getString("senha"));
                        
                        usuarios.add(usuario);
                    }
                    // executa o comando no banco
                    canal.execute(sql);
                    return usuarios;
                }
                catch(SQLException e){
                    System.out.println(e.getMessage());
                    return null;
                }
            }    

    
    }
}

    