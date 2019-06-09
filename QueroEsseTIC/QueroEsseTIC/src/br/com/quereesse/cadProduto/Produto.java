/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.quereesse.cadProduto;

import br.com.quereesse.cadComentario.Comentario;
import br.com.quereesse.cadUsuario.Usuario;

/**
 *
 * @author vsued
 */
public class Produto {
    private int id;
    private String nomeProduto;
    private int avaliacao;
    private String especificacao;
    private String modelo;
    private int usuarioLogado;
    private Comentario comentario;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public int getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(int avaliacao) {
        this.avaliacao = avaliacao;
    }



    public String getEspecificacao() {
        return especificacao;
    }

    public void setEspecificacao(String especificacao) {
        this.especificacao = especificacao;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Comentario getComentario() {
        return comentario;
    }

    public void setComentario(Comentario comentario) {
        this.comentario = comentario;
    }

    public int getUsuarioLogado() {
        return usuarioLogado;
    }

    public void setUsuarioLogado(int usuarioLogado) {
        this.usuarioLogado = usuarioLogado;
    }  
    
}
