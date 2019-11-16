/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.quereesse.cadProduto;

import java.util.ArrayList;

/**
 *
 * @author vsued
 */
public interface ProdutoDAO {
    
    public boolean insere(Produto produto);
    
    public boolean remove(Produto produto);
    
    public boolean atualiza(Produto produto);
    
    public ArrayList<Produto> consulta();   
}
