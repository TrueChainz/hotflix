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
        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact 
          render= {props => (
            <Home title="Home Page" component={Nav} {...props}/>
          )

          }/>
          <Route 
          path="/catalog" exact 
          render={props => (
            <Catalog title="Catalog Page" component={Nav} {...props}/>
          )}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
