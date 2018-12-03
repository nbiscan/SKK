import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import MyTickets from './components/MyTickets';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/mytickets'} component={MyTickets} />
        </Switch>
      </Router>
    );
  }
}

export default App;
