import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'info-cicle',
    title: 'Sobre nós',
    
}

export default class Sobre extends Component {

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                    <div className="text">
       
                       <p> 
                            O nosso foco principal é dar ao consumidor as
                            características boas e ruins de determinado produto na hora de 
                            realizar a compra, não levando em consideração a compra somente pela internet,
                            podendo assim ter todas as informações através da Central Web e também comprar em uma
                            loja física.
                        </p>
                        
                    </div>
                    
                </div>
            </div>
            </div>
        )
    }

    render() {
        return (
            
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}