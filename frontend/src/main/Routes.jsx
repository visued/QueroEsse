import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Sobre from '../components/sobre/Sobre'
import Entrar from '../components/login/Entrar'
import Cadastrar from '../components/cadastrar/Cadastrar'
import Agendar from '../components/agendar/Agendar'
import Produto from '../components/produto/Produto'


export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/entrar' component={Entrar} /> 
        <Route path='/sobre' component={Sobre} />
        <Route path='/cadastrar' component={Cadastrar} />
        <Route path='/agendar-crawler' component={Agendar} />
        <Route path='/produto/:id' component={Produto} />
        <Redirect from='*' to='/' />
    </Switch>

