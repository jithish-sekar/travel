import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './home';
import Aboutus from './aboutus';
import Developers from './developers'

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/developers' component={Developers}/>
    </Switch>
)
export default withRouter(Main);