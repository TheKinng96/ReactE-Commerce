import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up-component';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

//functional component: keep sign in and up components respectively
//state class component: store data to pass down to the childnode

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;