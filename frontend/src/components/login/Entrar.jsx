import React, { Component } from 'react'
import './Senha.css';
import GoogleLogin from 'react-google-login';
import './rodal.css'
import Rodal from 'rodal';
import { Link } from 'react-router-dom'



const responseGoogle = (response) => {
    console.log(response);
}

export default class Entrar extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    hide() {
        this.setState({ visible: false });
    }
    render() {
        return (
            <div>
                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                
                
                <div>
                    <p>Entre com o Google ou clique em Pular</p>

                    <GoogleLogin
                        clientId="560879691632-ecnnfrqr7g6mlf7e9icr7d4535n008gs.apps.googleusercontent.com"
                        buttonText="Entrar"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <Link to="/">
                        <button> Pular </button>
                    </Link>
                    
                </div>
                </Rodal>
            </div>
           
        );
    }

} 