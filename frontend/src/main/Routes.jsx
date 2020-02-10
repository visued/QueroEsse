import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Sobre from '../components/sobre/Sobre'
import Entrar from '../components/login/Entrar'
<<<<<<< HEAD
import Produto from '../components/produto/produto'
=======
import Cadastrar from '../components/cadastrar/Cadastrar'
import Agendar from '../components/agendar/Agendar'
import Produto from '../components/produto/Produto'
>>>>>>> a24ca7025a033fb5a272e6542e3ab28d3a3c268b


export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/entrar' component={Entrar} /> 
        <Route path='/sobre' component={Sobre} />
<<<<<<< HEAD
        <Route path='/produto' component={Produto} />
=======
        <Route path='/cadastrar' component={Cadastrar} />
        <Route path='/agendar-crawler' component={Agendar} />
        <Route path='/produto/:id' component={Produto} />
>>>>>>> a24ca7025a033fb5a272e6542e3ab28d3a3c268b
        <Redirect from='*' to='/' />
    </Switch>

