import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component { // convert to 

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    // observer for the user signin state
    this.unsubscribeFromAuth = 
    auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        console.log(userAuth)
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef)
        // subscribe to data change //similar onAuthStateChange
        userRef.onSnapshot(snapshot => { 
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth) 
      // sets user to null oAuth returns null
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth(); 
  }

  render(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={() => 
          this.props.currentUser ? (
            <Redirect to ='/' />
            ): (
              <SignInAndSignUpPage/>
            )
            }
          />
     </Switch>
    </div>
  );
  }
}
// gives access to this.state.currentUser
const mapStateToProps = ({user}) =>({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
// make dynamik urls by using <Link to={`${props.match.url}/13`}></Link>
// which calls the RoutsPath and adds something on top.
// Switch: Makes sure only to render the route it fits first
/*
    <Route 
    exakt // if key word there musst be exactly the 'path' 
    path='/hats'
    component={HatsPage}
*/