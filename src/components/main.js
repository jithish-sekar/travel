import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './home';
import Aboutus from './aboutus';
import Developers from './developers'
import Tndevotional from './tndevotional';
import Kldevotional from './kldevotional';
import Kadevotional from './kadevotional'
import Himachaldevotional from './himachaldevotional';
import Tnhills from './tnhills';
import FormsPage from './formvalidation';
import Klhills from './klhills';
import Himachalhills from './himachalhills';
import Himachaladventure from './himachaladventure';
import Utadventure from './uttarakhandadventure';
import Goa from './goabeach';
import Keralabeach from './keralabeach';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/developers' component={Developers} />
        <Route path='/tamilnadudevotional' component={Tndevotional} />
        <Route path='/keraladevotional' component={Kldevotional} />
        <Route path='/karnatakadevotional' component={Kadevotional} />
        <Route path='/himachaldevotional' component={Himachaldevotional} />
        <Route path='/tamilnaduhills' component={Tnhills} />
        <Route path='/keralahills' component={Klhills} />
        <Route path='/himachalhills' component={Himachalhills}/>
        <Route path='/himachaladventure' component={Himachaladventure} />
        <Route path='/uttarakhandadvebture' component={Utadventure} />
        <Route path='/goabeach' component={Goa} />
        <Route path='/keralabeach' component={Keralabeach}/>
        <Route path='/enquiry' component={FormsPage} />
    </Switch>
)
export default withRouter(Main);