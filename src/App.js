import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils'

class App extends React.Component { // convert to 
  constructor() {
    super();
    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    // observer for the user signin state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log(user);
    }) // user state of firebase project
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth(); // lol..
  }

  render(){
  return (
    <div>
      <Header currentUser = { this.state.currentUser } />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
     </Switch>
    </div>
  );
  }
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