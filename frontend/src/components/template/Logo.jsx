import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

var currentLocation = window.location.pathname;


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
        if(currentLocation === '/'){
            this.visibility = 'hidden';
        }
        else{
            this.visibility = 'visible';
        }

        
    }
    
    render() {
        return (
            <aside className="logo" >
                <Link to="/" className="logo" >
                    <img src={logo} alt="logo" style={{visibility: this.visibility }}/>
                    
                </Link>
            </aside>
            
        )
    }

}