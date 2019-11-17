package br.com.quereesse.cadUsuario;

import java.util.ArrayList;

public interface UsuarioDAO {
    

    public boolean insere(Usuario usuario);
    
    public boolean remove(Usuario usuario);

    public boolean atualiza(Usuario usuario);

    public ArrayList<Usuario> consulta();
}
