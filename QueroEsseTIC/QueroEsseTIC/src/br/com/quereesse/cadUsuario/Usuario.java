package br.com.quereesse.cadUsuario;
public class Usuario {
   private int id;
   private String nome;
   private String sobrenome;
   private String apelido;
   private String senha;
    
    public Usuario(){
        
    }

    public Usuario(int id, String nome, String sobrenome, String apelido, String senha) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.apelido = apelido;
        this.senha = senha;
    }

    public int getIdUsuario() {
        return id;
    }

    public void setIdUsuario(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
    
}
