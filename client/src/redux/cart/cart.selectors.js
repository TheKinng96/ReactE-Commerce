// memorise selector, else the state will be fired repeatedly, nothing will be stored
// however refreshing browser will clear up the data
// selector increases the performance of the website speed
import { createSelector } from 'reselect';
// output selector: use react
// input selector: doesnt use react selector
const selectCart = state => state.cart;



export const selectCartItems = createSelector (
 [selectCart],
 cart => cart.cartItems
);
// 1st: collection of an array of input selectors
// 2nd: a func which return the value we want

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity,
        0
      )
  
)

export const selectCartTotal = createSelector (
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity * cartItem.price,
        0
    )
);