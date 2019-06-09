/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.quereesse.cadComentario;

import java.util.ArrayList;

/**
 *
 * @author vsued
 */
public interface ComentarioDAO {
    public boolean insere(Comentario comentario);
    
    public boolean remove(Comentario comentario);
    
    public boolean atualiza(Comentario comentario);
    
    public ArrayList<Comentario> consulta();
}
