import UserActionTypes from './user.types';
//{}: exported as const
//{}: exported as default

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
};

export default userReducer;
// state is the current value, action is the changes made on state
// this reducer focuses on only the changes of user
// case: when there has changes on 'case'
// return the other states + THE CHANGE