import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// redirect is used to direct the user if they are log in
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors'

import CheckoutPage from './pages/checkout/checkout.component'


class App extends React.Component{
  unsubscribeFromAuth = null

  componentDidMount() {
    // const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id:snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   }
    // setCurrentUser(userAuth);
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />): (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

// get user from redux state for redirecting
// from user reducer gets currentUser info
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// dispatch: for redux to know that whatever you passing me is
// going to be an action object that I'm going to pass to every reducer
// user action is a function that gets user but returns an action object
// invoking setCurrentUser with the user that will then be used as the payload 
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// app.js doesnt need any state from reducer: null #1
export default connect(mapStateToProps, mapDispatchToProps)(App);
