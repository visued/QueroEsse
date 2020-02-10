import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Sobre from '../components/sobre/Sobre'
import Entrar from '../components/login/Entrar'
import Produto from '../components/produto/produto'


export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/entrar' component={Entrar} /> 
        <Route path='/sobre' component={Sobre} />
        <Route path='/produto' component={Produto} />
        <Redirect from='*' to='/' />
    </Switch>

