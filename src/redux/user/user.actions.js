import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});
//no payload: telling the eventual saga we will write that will house our actual signing with google trigger that we need to triggle our sign in

export const googleSignInSuccess = user => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});
//sucess payload: we need to change sth to the state

export const googleSignInFailure = error => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});
//google doesnt need cuz it will go authentication rendering, manual needs email and password

export const emailSignInSuccess = user => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFailure = error => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error
});