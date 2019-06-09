/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.quereesse.cadComentario;

/**
 *
 * @author vsued
 */
public class Comentario {
    private int idComentario;
    private String comentario;
    
    
    public Comentario(){        
    }

    public Comentario(int idComentario, String comentario) {
        this.idComentario = idComentario;
        this.comentario = comentario;
    }

    public int getIdComentario() {
        return idComentario;
    }

    public void setIdComentario(int idComentario) {
        this.idComentario = idComentario;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
    
    
}
