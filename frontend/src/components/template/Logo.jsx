import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

/* export default props =>
    
    <aside className="logo">
        
        <Link to="/" className="logo">
        
            <img src={logo} alt="logo" />
        </Link>
    </aside> */
   /* export function show() {
        if(this.props.location.pathname === "/sobre"){
            this.setState(prevState=>({display:{...prevState.display,display:'block'}}))
        }
        
    }*/
    
export default class Logo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hideLogo: {display: "none"}
        };
       
    }
    
    render() {
        return (
            <aside className="logo" >
                <Link to="/" className="logo" >
                    <img src={logo} alt="logo" style={this.state.hideLogo}/>
                </Link>
            </aside>
            
        )
    }

}