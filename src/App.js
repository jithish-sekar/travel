import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import HeaderComponent from "./components/headercomponent"
import Main from './components/main';

const App = (props) => {
  return (
    <div className='bgcolorcomponent'>
      <HeaderComponent history={props.history} />
      <Main />
      {/* footer */}
    </div>
  );
};

export default withRouter(App);
