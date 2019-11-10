import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'info-cicle',
    title: 'Sobre nós',
    
}

const baseUrl = 'http://localhost:3001/sobre'
const initialState = {
    sobre: [],
    list: []
}

export default class Sobre extends Component {

    state = { ...initialState }
    
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ sobre: initialState.sobre })
    }

    save() {
        const sobre = this.state.sobre
        const method = sobre.id ? 'put' : 'post'
        const url = sobre.id ? `${baseUrl}/${sobre.id}` : baseUrl
        axios[method](url, sobre)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ sobre: initialState.sobre, list })
            })
    }

    getUpdatedList(sobre, add = true) {
        const list = this.state.list.filter(u => u.id !== sobre.id)
        if(add) list.unshift(sobre) //Insere na primeira posiçao da lista
        return list
    }

    updateField(event) {
        const sobre = { ...this.state.sobre }
        sobre[event.target.name] = event.target.value
        this.setState({ sobre })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                       <p> O nosso foco principal é dar ao consumidor as
                            características boas e ruins de determinado produto na hora de 
                            realizar a compra, não levando em consideração a compra somente pela internet,
                             podendo assim ter todas as informações através da Central Web e também comprar em uma
                              loja física. </p>
                    </div>
                   
                </div>

               
                
            </div>
        )
    }

    load(sobre) {
        this.setState({ sobre })
    }

    remove(sobre) {
        axios.delete(`${baseUrl}/${sobre.id}`).then(resp => {
            const list = this.getUpdatedList(sobre, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Aproveite nosso site!</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(sobre => {
            return (
                <tr key={sobre.id}>
                    <td>{sobre.email}</td>
                    <td>{sobre.senha}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(sobre)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(sobre)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    
    render() {
        return (
            
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}