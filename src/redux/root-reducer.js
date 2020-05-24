// actual base reducer object => represents all state of the app
// combine all state together
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart:cartReducer
});

export default persistReducer(persistConfig, rootReducer);