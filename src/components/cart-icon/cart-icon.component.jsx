import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
// import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

function CartIcon() {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => { dispatch(toggleCartHidden()) }}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// });

export default CartIcon;
