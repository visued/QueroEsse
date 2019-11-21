import React, { Component } from 'react'
import axios from 'axios';
import './agendar.css';


export default class Agendar extends Component {

    constructor(props){
        super(props)
        this.onChangeLink = this.onChangeLink.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        agendamentos: [],
        nome: '',
        value: '',
        link: ''
    }

    onChangeLink(e) {
        this.setState({ link: e.target.value })
    }

    _handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const agendamentoObjeto = {
            ecommerce: this.state.value,
            link: this.state.link,
            status_agendamento: "pendente",
            usuarioId: 1
        };

        axios.post('http://localhost:4000/agendamentos', agendamentoObjeto)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

    }


    componentDidMount() {
        const nome = localStorage.getItem('nome');
        this.setState({nome: nome});

        axios.get("http://localhost:4000/agendamentos", { headers: { "Access-Control-Allow-Origin": "*" } }).then(
            res => {
                const agendamentos = res.data;
                this.setState({ agendamentos });
                

            }
        )
    }

    

    render() {
        return (
            <div>
                <h1 class="title">Agendamento do Crawler</h1>
                <h4> Olá, {this.state.nome} </h4>
                <form id="formAgendaCrawler" onSubmit={this.onSubmit}>
                    <div class="form-row align-items-center">
                        <div class="col">
                            <input type="text" class="form-control" id="linkProduto" value={this.state.link} onChange={this.onChangeLink} placeholder="URL do produto" />
                        </div>
                        <div class="col">
                            <select id="escolherProduto" class="form-control" onChange={this._handleChange} ref={ref => {this._select = ref}}>
                                <option selected>Escolha o ecommerce ...</option>
                                <option value="magazineluiza">Magazine Luiza</option>
                                <option value="casasbahia"> Casas Bahia</option>
                                <option value="pontofrio">Ponto Frio</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary" id="agendaCrawler">Agendar</button>
                        </div>
                    </div>
                </form>
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">URL</th>
                            <th scope="col">Ecommerce</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {this.state.agendamentos.map((agendamento) => (


                        <tbody>
                            <tr class="table-fixed">
                                <th scope="row">{agendamento.id}</th>
                                <td>{agendamento.link}</td>
                                <td>{agendamento.ecommerce}</td>
                                <td>{agendamento.status_agendamento}</td>
                            </tr>
                        </tbody>

                    ))}

                </table>

            </div>
        );
    }
} 