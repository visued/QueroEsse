import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Sobre from '../components/sobre/Sobre'
import Entrar from '../components/login/Entrar'


export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/entrar' component={Entrar} /> 
        <Route path='/sobre' component={Sobre} />
        <Redirect from='*' to='/' />
    </Switch>

