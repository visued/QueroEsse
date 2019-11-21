import Search from "react-search";
import React, { Component, PropTypes } from "react";
import searchStyle from "./Busca.css";
import Main from "../template/Main";
import Logo from "../../assets/imgs/logo-principal.png";
import search from "./search.css";
import {
  Route,
  IndexRoute,
  browserHistory,
  Redirect,
  withRouter
} from "react-router";
class Busca extends Component {
  handleItemsChange(items) {
    this.setState({
      linkRedirect: items
    });
  }

  constructor(props) {
    super(props);
    this.state = { repos: [], redirect: false, linkRedirect: [] };
  }
  
  chamaLogin = () => {
    this.setState({
      redirect: true
    })

    console.log('esta chamado....')
   }

  getItemsAsync(searchValue, cb) {
    let url = `http://localhost:4000/produtos/nome/${searchValue}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(results => {
        if (results != undefined) {
          let items = results.map((res, i) => {
            return { id: res.id, value: res.nome };
          });
          this.setState({ repos: items });
          cb(searchValue);
        }
      });
  }



  render() {
    if (this.state.redirect) {
      return <Redirect to={`/produto/:${this.state.linkRedirect.id} />;
    } else {
      return (
        <div>
          <Main>
            <img src={Logo} alt="logo" className={search.logotipo} />
          </Main>
          <div className={search.searchbox}>
            <Search
              items={this.state.repos}
              getItemsAsync={this.getItemsAsync.bind(this)}
              onItemsChanged={this.handleItemsChange.bind(this)}
              placeholder="Insira o nome do produto ..."
              NotFoundPlaceholder=" "
            />
            <button type="submit"
            onClick={() => this.chamaLogin()}
            >Buscar</button>
          </div>
        </div>
      );
    }
  }
}
export default Busca;
