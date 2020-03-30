import { createSelector } from  'reselect';

// Input Selectors 
// Output Selectors + Input Selector


const selectCart = state => state.cart ;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
[selectCartItems],
cartItems => 
    cartItems.reduce(
        (accumalatedQuantity, cartItem) => 
        accumalatedQuantity+ cartItem.quantity,
        0
    )
)