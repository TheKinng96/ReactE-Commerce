import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-sign-up.styles.scss';

//functional component: keep sign in and up components respectively
//state class component: store data to pass down to the childnode

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
  </div>
);

export default SignInAndSignUpPage;