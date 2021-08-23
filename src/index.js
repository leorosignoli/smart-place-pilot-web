import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './NavBar';
import User from './User';
import Group from './Group';
import Home from './Home';
import Role from './Role';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/User' exact component={User} />
        <Route path='/group' component={Group} />
        <Route path='/role' component={Role} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
