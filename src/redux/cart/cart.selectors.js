import { createSelector } from  'reselect';

// Input Selectors 
// Output Selectors + Input Selector


const selectCart = state => state.cart ;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
[selectCartItems],
cartItems => 
    cartItems.reduce(
        (accumalatedQuantity, cartItem) => 
        accumalatedQuantity+ cartItem.quantity,
        0
    )
);

export const selectCartTotal = createSelector(
[selectCartItems],
cartItems => 
    cartItems.reduce(
        (accumalatedQuantity, cartItem)=> 
        (accumalatedQuantity + cartItem.quantity*cartItem.price),
            0
    )
);