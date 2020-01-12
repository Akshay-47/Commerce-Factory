import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CardItem from "./CardItem";
import { toggleCart } from "../store/cart";
import CartContainer from "./CartContainer";
const RightSection = () => {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector(state => state.cartData.cartItems.length);
  const cartIsOpen = useSelector(state => state.cartData.cartIsOpen);

  const renderCartUi = count => {
    return (
      <>
        <header className="cart-header">
          <div className="cart-icon">
            <span className="item-count">
              <small>{cartItemsCount}</small>
            </span>
            <img
              src="https://c7.uihere.com/files/139/420/971/shopping-cart-computer-icons-white-cart-png-simple.jpg"
              alt="cart icon"
            />
            <span className="header-name">Cart</span>
          </div>
        </header>
        {renderContent(count)}
      </>
    );
  };

  const renderContent = count => {
    if (count === 0) {
      return <div>Your Cart Is Empty</div>;
    } else {
      return <CartContainer />;
    }
  };

  return (
    <div className="right-section">
      <div
        onClick={() => {
          dispatch(toggleCart());
        }}
        className="cart-icon"
      >
        {cartItemsCount > 0 && (
          <span className="item-count">
            <small>{cartItemsCount}</small>
          </span>
        )}
        <img
          src="https://c7.uihere.com/files/139/420/971/shopping-cart-computer-icons-white-cart-png-simple.jpg"
          alt="cart icon"
        />
      </div>
      <div className={"overlay " + (cartIsOpen ? "active" : "")}>
        <div className="overlay-content">
          <div
            onClick={() => dispatch(toggleCart())}
            className="close-cart-button"
          >
            <span>&times;</span>
          </div>
          {renderCartUi(cartItemsCount)}
        </div>
      </div>
      <div className="action-info">
        <div className="product-count">16 product(s) found</div>
      </div>
      <CardItem />
    </div>
  );
};
export default RightSection;
