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
import UserGroup from './UserGroup';
import GroupRole from './GroupRole';
import UserRole from './UserRole';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component={Home} />
        <Route path ='/User' exact component={User} />
        <Route path ='/Group' component={Group} />
        <Route path ='/Role' component={Role} />
        <Route path ='/UserGroup' component={UserGroup} />
        <Route path ='/GroupRole' component={GroupRole} />
        <Route path ='/UserRole' component={UserRole} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
