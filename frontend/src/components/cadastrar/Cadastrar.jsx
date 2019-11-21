import React, { Component } from 'react'
import Entrar from '../login/Entrar'
import './cadastrar.css';


export default class Cadastrar extends Component {
    state = {
        nome: ''
    }

    constructor(props) {
        super(props);
          
    }

    componentDidMount(){
        const nome = localStorage.getItem('nome');
        this.setState({nome: nome});
    }

    render() {
        return (
            
            <div>
                <h1>Olá, {this.state.nome}</h1>
            </div>
        );
    }
} 