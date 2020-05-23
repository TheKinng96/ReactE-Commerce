import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
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