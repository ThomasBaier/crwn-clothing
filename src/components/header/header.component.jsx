import React from 'react';
import {connect } from 'react-redux';
import './header.styles.scss';
import {Link } from 'react-router-dom';
import {ReactComponent as Logo } from './../../assets/crwn.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import { selectCartHidden}  from '../../redux/cart/cart.selectors';
import { selectCurrentUser} from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>
                SIGN IN
            </Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
    </div>
)
const mapStateToProps = (state) => createStructuredSelector({ //destructure nested values
    currentUser: selectCurrentUser, // createStructuredSelecot passes automaticly the toplvl state into props
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
// mapStateToProps makes sure to get currentUser as Props from Redux