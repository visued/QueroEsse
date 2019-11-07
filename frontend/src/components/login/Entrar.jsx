import React, { Component } from 'react'
import './Senha.css';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
}

export default class Entrar extends Component {
    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalExemplo">
                    Abrir modal de demonstração
                </button>
            </div>,

            <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Título do modal</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary">Salvar mudanças</button>
                        </div>
                    </div>
                </div>
            </div>,

            <div>
                <GoogleLogin
                    clientId="560879691632-ecnnfrqr7g6mlf7e9icr7d4535n008gs.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }

} 