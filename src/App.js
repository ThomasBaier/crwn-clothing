import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}
export default App;
// make dynamik urls by using <Link to={`${props.match.url}/13`}></Link>
// which calls the RoutsPath and adds something on top.
// Switch: Makes sure only to render the route it fits first
/*
    <Route 
    exakt // if key word there musst be exactly the 'path' 
    path='/hats'
    component={HatsPage}
*/