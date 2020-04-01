import React from 'react';
import './cart-dropdown.styles.scss';

import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';


const CartDropdown = ({ cartItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items"> 
        {cartItems.length ?
            (cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
        )))
        : (
            <span className="empty-message">Your cart is empty</span>
        )}
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
    )


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
// withRouter HighOrderComponent (Passes Map History and Location)
// takes from connect .. order inner to outer 
export default withRouter(connect(mapStateToProps)(CartDropdown));