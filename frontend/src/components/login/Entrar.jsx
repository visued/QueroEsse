import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Entrar',
    subtitle: 'Entre com sua conta'
}

const baseUrl = 'http://localhost:3001/entrar'
const initialState = {
    login: [],
    list: []
}

export default class Entrar extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ login: initialState.login })
    }

    save() {
        const login = this.state.login
        const method = login.id ? 'put' : 'post'
        const url = login.id ? `${baseUrl}/${login.id}` : baseUrl
        axios[method](url, login)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ login: initialState.login, list })
            })
    }

    getUpdatedList(login, add = true) {
        const list = this.state.list.filter(u => u.id !== login.id)
        if(add) list.unshift(login) //Insere na primeira posiçao da lista
        return list
    }

    updateField(event) {
        const login = { ...this.state.login }
        login[event.target.name] = event.target.value
        this.setState({ login })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-Mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.login.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu e-mail." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Senha</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.login.senha}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite sua senha..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Entrar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(login) {
        this.setState({ login })
    }

    remove(login) {
        axios.delete(`${baseUrl}/${login.id}`).then(resp => {
            const list = this.getUpdatedList(login, false)
            this.setState({ list })
        })
    }

    // renderTable() {
    //     return (
    //         <table className="table mt-4">
    //             <thead>
    //                 <tr>
    //                     <th>E-mail</th>
    //                     <th>Senha</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {this.renderRows()}
    //             </tbody>
    //         </table>
    //     )
    // }

    renderRows() {
        return this.state.list.map(login => {
            return (
                <tr key={login.id}>
                    <td>{login.email}</td>
                    <td>{login.senha}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(login)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(login)}>
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
                {/* {this.renderTable()} */}
            </Main>
        )
    }
}