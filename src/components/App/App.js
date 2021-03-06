import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from '../Main/Nav/Nav'
import Home from '../Pages/Home/Home'
import Catalog from '../Pages/Catalog/Catalog';
import Pagination from '../Main/Pagination/Pagination';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact 
          render= {props => (
            <Home title="Home Page" components={[Nav, Pagination]} {...props}/>
          )

          }/>
          <Route 
          path="/catalog" exact 
          render={props => (
            <Catalog title="Catalog Page" components={[Nav, Pagination]} {...props}/>
          )}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
