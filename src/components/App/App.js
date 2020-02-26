import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from '../Nav/Nav'
import Home from '../Main/Home/Home'
import Catalog from '../Main/Catalog/Catalog';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/catalog" exact component={Catalog}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
