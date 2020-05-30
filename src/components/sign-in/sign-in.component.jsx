import React from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';
import { googleSignInStart } from '../../redux/user/user.actions';
//use a class component to store signed-in data

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:''
    }
  }


  //dont let the form function, using during testing
  handleSubmit = async event => {
    event.preventDefault();

    const { email,password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password);
          //clearing the field when button clicked
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error);
    }
  };

  //pull info
  handleChange = event => {
    const { value,name } = event.target;

    this.setState({ [name]:value })
  }

  render(){
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label='email' required />
          <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign In </CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
            {''}
            Sign in with Google{''}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);