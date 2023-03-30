import "babel-polyfill";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import data from '../package.json';
import './index.scss';

// Scenes
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

// Components
import Home from './scenes/Home/Home';
import Feedback from './scenes/Feedback/Feedback';
import ApiDocs from './scenes/Api Docs/Api Docs';
import Test from './scenes/Test/Test';
//import {test1} from './scenes/Test/test.html';


import * as serviceWorker from './serviceWorker';

import { defineCustomElements, addTheme } from '@scania/components';
import { theme as scania } from '@scania/theme-light'; 

defineCustomElements();
addTheme(scania);


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { ITEMS: { children: [] } }
  }

  componentDidMount() {
    this.setState({
      ITEMS: {
        url: '/',
        children: [
          {
            name: 'Home', url: '/home', ctrl: Home, type : 'primary'
          },
          {
            name: 'Api Documentation', url: '/apiDocs', ctrl: ApiDocs, type : 'primary',
            
          },
          {
            name: 'Test', url: '/test', ctrl: Test, type : 'primary'
          },
          {
            name: 'Feedback', url: '/feedback', ctrl: Feedback, type : 'primary',
            // children: [
            //   { name: 'Feature1', url: '/f1', ctrl: Feedback, type : 'primary' },
            //   { name: 'Feature2', url: '/f2', ctrl: Feedback, type : 'primary' },
            //   { name: 'Feature3', url: '/f3', ctrl: Feedback, type : 'primary' }
            // ]
          },
        ]
      }
    })
  }

  render () {
    return (
    <Router basename={data.name}>
      <c-theme name="scania" global="true"></c-theme>
      <Header items={this.state.ITEMS} />
      <Content items={this.state.ITEMS} />
      <Footer />
    </Router>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
