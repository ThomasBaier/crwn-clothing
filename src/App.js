import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-and-sign-up/sign-in-and-sign-up.component';
function App() {
  return (
    <div>
      <Header />
      <Switch>

        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
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