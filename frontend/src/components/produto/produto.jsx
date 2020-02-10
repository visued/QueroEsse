import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import './produto.css';


export default class Produto extends Component {
    state = {
        id: 0,
        nome: '',
        descricao: '',
        rating: 0,
        foto: '',
        comentarios: []
    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        axios.get("http://localhost:4000/produtos/" + this.props.match.params.id, { headers: { "Access-Control-Allow-Origin": "*" } }).then(
            res => {
                const produtos = res.data;
                this.setState({
                    id: produtos.id,
                    nome: produtos.nome,
                    descricao: produtos.descricao,
                    rating: produtos.rating,
                    foto: produtos.foto,
                    comentarios: produtos.Comentarios
                });
                console.log(res.data)
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Produto, id: {this.state.id}</h1>
                <h5>{this.state.nome}</h5>

                <StarRatingComponent
                    name={String} /* name of the radio input, it is required */
                    value={this.state.rating} /* number of selected icon (`0` - none, `1` - first) */
                    starCount={5} /* number of icons in rating, default `5` */
                    starColor={String} /* color of selected icons, default `#ffb400` */
                    emptyStarColor={String} /* color of non-selected icons, default `#333` */
                    editing={Boolean} /* is component available for editing, default `true` */
                />

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="card" >
                                <img src={this.state.foto} class="card-img-top" />
                                <div class="card-body">
                                    <p class="card-text">{this.state.descricao}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

                    <div class="card">

                        <div class="card-header" role="tab" id="headingOne1">
                            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                aria-controls="collapseOne1">
                                <h5 class="mb-0">
                                    + Clique para mostrar comentários
                                </h5>
                            </a>
                        </div>
                        <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                            {this.state.comentarios.map((item) => (<div class="card-body">{item.comentario}</div>))}
                        </div>

                    </div>
                </div>
            </div>

        );
    }
} 