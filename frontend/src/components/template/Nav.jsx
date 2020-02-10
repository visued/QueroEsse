import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default props =>
    
    <aside className="menu-area">
        <nav className="menu">
            
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            
            <Link to="/entrar">
                <i className="fa fa-user"></i> Entrar
            </Link>
            
            <Link to="/users">
                <i className="fa fa-users"></i> Registrar
            </Link>

            <Link to="/agendar-crawler">
                <i className="fa fa-tasks"></i> Agendamento
            </Link>

            <Link to="/sobre">
                <i className="fa fa-info-circle"></i> Sobre
            </Link>

        </nav>
    </aside>