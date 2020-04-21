import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './home';
import Aboutus from './aboutus';
import Developers from './developers'
import Tndevotional from './tndevotional';
import Kldevotional from './kldevotional';
import Kadevotional from './kadevotional'
import Himachaldevotional from './himachaldevotional';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/developers' component={Developers} />
        <Route path='/tamilnadudevotional' component={Tndevotional} />
        <Route path='/keraladevotional' component={Kldevotional} />
        <Route path='/karnatakadevotional' component={Kadevotional} />
        <Route path='/himachaldevotional' component={Himachaldevotional}/>
    </Switch>
)
export default withRouter(Main);