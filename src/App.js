import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import HeaderComponent from "./components/headercomponent"
import Main from './components/main';
import Footerpage from './components/footer';

const App = (props) => {
  return (
    <div>
      <div className='bgcolorcomponent'>
        <HeaderComponent history={props.history} />
        <Main />
      </div>
      <Footerpage history={props.history} />
    </div>
  );
};

export default withRouter(App);
