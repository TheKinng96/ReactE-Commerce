// actual base reducer object => represents all state of the app
// combine all state together
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart:cartReducer
})