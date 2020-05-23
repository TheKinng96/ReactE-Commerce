// memorise selector, else the state will be fired repeatedly, nothing will be stored

import { createSelector } from 'reselect';

// input selector: doesnt use react selector
const selectCart = state => state.cart;
// output selector: use react


export const selectCartItems = createSelector (
 [selectCart],
 cart => cart.cartItems
);
// 1st: collection of an array of input selectors
// 2nd: a func which return the value we want

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity,
        0
      )
  
)