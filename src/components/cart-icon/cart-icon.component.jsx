import React,{useContext} from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from "reselect";

//import { toggleCartHidden } from "../../redux/cart/cart.actions";
// import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from '../../providers/cart/cart.provider';

import "./cart-icon.styles.scss";

function CartIcon() {
  const { toggleHidden,cartItemsCount }=useContext(CartContext)

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
}




export default CartIcon;
