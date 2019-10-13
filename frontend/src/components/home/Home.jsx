import React from 'react'
import Main from '../template/Main'
import Logo from '../../assets/imgs/logo-principal.png'
import './Busca.css';


class Busca extends React.Component {
    render() {
        return (
            <div>
                <Main>
                    <img src={Logo} alt="logo" />
                </Main>
                
                <input type="text" className="busca"
                    name="busca"
                    placeholder="Encontre o seu produto..." />
                
            </div>
            
        )
    }
}
export default Busca;