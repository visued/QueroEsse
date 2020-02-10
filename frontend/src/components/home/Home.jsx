<<<<<<< HEAD
import React from 'react'
import Main from '../template/Main'
import Logo from '../../assets/imgs/logo-principal.png'
import './Busca.css';
import JSONP from 'jsonp';
import { AutoComplete } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Redirect } from 'react-router-dom'
=======
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
>>>>>>> a24ca7025a033fb5a272e6542e3ab28d3a3c268b

  constructor(props) {
    super(props);
    this.state = { repos: [], redirect: false, linkRedirect: [] };
  }
  
  chamaLogin = () => {
    this.setState({
      redirect: true
    })

<<<<<<< HEAD
const api = `http://localhost:3001/produtos/`;

class Busca extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.state = {
            dataSource: [],
            inputValue: ''
        }
    }
    onUpdateInput(inputValue) {
        const self = this;
        this.setState({
            inputValue: inputValue
        }, function () {
            self.performSearch();
        });
    }
    
    performSearch() {
        const
            self = this,
            url = api + this.state.inputValue;

        if (this.state.inputValue !== '') {
            JSONP(url, function (error, data) {
                let searchResults, retrievedSearchTerms;
=======
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
>>>>>>> a24ca7025a033fb5a272e6542e3ab28d3a3c268b



<<<<<<< HEAD
    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='http://localhost:3000/produto/' />
        }
    }
    onNewRequest(searchTerm) {
        
    }

    render() {
        
        return (
            <div >
                {this.renderRedirect()}
                <Main>
                    <img src={Logo} alt="logo" />
                </Main>
                <MuiThemeProvider muiTheme={getTheme()}>
                    <span  className="fa fa-search "></span>
                    <AutoComplete 
                        underlineStyle={{display: 'none'}}
                        dataSource    = {this.state.dataSource}
                        onUpdateInput = {this.onUpdateInput}
                        onNewRequest = {this.setRedirect}
                        fullWidth={true}
                        placeholder = "Encontre o seu produto..."
                        style={{
                            margin: '0 255px',
                            maxWidth: 560,
                            border:' 1px solid #c6c6c6',
                            height:'45px',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            WebkitBoxShadow: '1px 2px 5px 1px rgba(0,0,0,0.22)',
                            MozBoxShadow: '1px 2px 5px 1px rgba(0,0,0,0.22)',
                            textIndent: '8px'
                        }} 
                    />
                </MuiThemeProvider>
            </div>
        )
=======
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
>>>>>>> a24ca7025a033fb5a272e6542e3ab28d3a3c268b
    }
  }
}
export default Busca;
