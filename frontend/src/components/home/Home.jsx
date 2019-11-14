import React from 'react'
import Main from '../template/Main'
import Logo from '../../assets/imgs/logo-principal.png'
import { AutoComplete } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JSONP from 'jsonp';
import SearchBar from 'material-ui-search-bar';
import './Busca.css';

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
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    

                    <SearchBar
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        hintText= 'Encontre o seu produto...'
                        style={{
                            margin: '0 250px',
                            maxWidth: 600
                        }}
                    />
                </MuiThemeProvider>

                {/* <div >
                <input type="text" className="busca"  
                    name="busca"
                    placeholder="Encontre o seu produto..." />
                <span  class="fa fa-search "></span>
                </div> */}
            </div>



        )
    }
}
export default Busca;