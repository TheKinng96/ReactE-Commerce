// utility functions: keep files clean and organize funcitons that we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
  // check if the item has ald in the cart

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1}
      : cartItem 
    )
  }
  // map will return new array
  return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }];
}