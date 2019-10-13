import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <Link to="/">
                <i className="fa fa-sign-in"></i> Entrar
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Registrar
            </Link>
            <Link to="/produtos">
                <i className="fa fa-info-circle"></i> Sobre
            </Link>
        </nav>
    </aside>