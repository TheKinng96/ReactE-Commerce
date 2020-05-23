import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({ currentUser }) => (
  <div className = "header">
    <Link className='logo-container' to='/'>
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to='/shop'>
        Shop
      </Link>
      <Link className="option" to='/contact'>
        Contact
      </Link>
      {
        currentUser?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
// connect is higher level function which let the element can pull data from the ONLY state
// updated the component, an update at app.js is still needed