import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { useNavigate } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';



function CartDropdown({ cartItems,dispatch }) {
  
  let navigate = useNavigate();

async function handleClick(event) {
  event.preventDefault();
  navigate('/checkout');
  }
  
  return (
    <div className='cart-dropdown'>
    <div className='cart-items'>
        {
          cartItems.length ?
          cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
          ))
            : (
              <span className='empty-message'>Your cart is empty</span>
          )
        }
    </div>
      <CustomButton onClick={(e) => {
        handleClick(e);
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton>
  </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);