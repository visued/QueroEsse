import React from 'react'
import Main from '../template/Main'
import Logo from '../../assets/imgs/logo-principal.png'
import './Busca.css';
import JSONP from 'jsonp';
import { AutoComplete } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const getTheme = () => {
  let overwrites = {
        "palette": {
            "primary1Color": "#c6c6c6",
            "primary3Color": "##c6c6c6",
            "accent3Color": "#c6c6c6",
            "borderColor": "#c6c6c6"
        }, 
    };
  return getMuiTheme(baseTheme, overwrites);
}

const googleAutoSuggestURL = `//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

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
            url = googleAutoSuggestURL + this.state.inputValue;

        if (this.state.inputValue !== '') {
            JSONP(url, function (error, data) {
                let searchResults, retrievedSearchTerms;

                if (error) return error;

                searchResults = data[1];

                retrievedSearchTerms = searchResults.map(function (result) {
                    return result[0];
                });

                self.setState({
                    dataSource: retrievedSearchTerms
                });
            });
        }
    }

    render() {
        
        return (
            <div >
                <Main>
                    <img src={Logo} alt="logo" />
                </Main>
                <MuiThemeProvider muiTheme={getTheme()}>
                    <span  class="fa fa-search "></span>
                    <AutoComplete 
                        underlineStyle={{display: 'none'}}
                        dataSource    = {this.state.dataSource}
                        onUpdateInput = {this.onUpdateInput}
                        fullWidth={true}
                        placeholder = "Encontre o seu produto..."
                        style={{
                            margin: '0 255px',
                            maxWidth: 560,
                            border:' 1px solid #c6c6c6',
                            height:'45px',
                            'box-shadow': '0 1px 1px rgba(0,0,0,0.1)',
                            'border-radius': '8px',
                            '-webkit-box-shadow': '1px 2px 5px 1px rgba(0,0,0,0.22)',
                            '-moz-box-shadow': '1px 2px 5px 1px rgba(0,0,0,0.22)',
                            'text-indent': '8px'
                        }} 
                    />
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Busca;