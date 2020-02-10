import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import Rodal from 'rodal';

import './Senha.css';
import './rodal.css'



export default class Entrar extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: true }
        
    }
    setRedirect = () => {
        this.setState({
            redirect: false
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/agendar-crawler' />
        }
    }

    responseGoogle = (response) => {
        localStorage.setItem('nome', response['profileObj']['name']); 
        localStorage.setItem('email', response['profileObj']['email']);  
        localStorage.setItem('fotoUsuario', response['profileObj']['imageUrl']); 
        localStorage.setItem('googleid', response['profileObj']['googleId']); 
        this.setState({ redirect: true });
    }
    


    

    render() {
        return (
            <div>
                
                {this.renderRedirect()}
                <Rodal visible={this.state.visible} onClose={this.setRedirect}>
                    <div >
                        <p>Login com Google</p> <br/>
                        <br />
                        <div className="btn btn-space">
                            <GoogleLogin
                                clientId="560879691632-ecnnfrqr7g6mlf7e9icr7d4535n008gs.apps.googleusercontent.com"
                                buttonText="Entrar"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />

                        </div>
                        <Link to="/" >
                            <button className="btn btn-primary"> Pular </button>
                        </Link>
                        
                    </div>
                </Rodal>                
            </div>
        );
    }
} 


