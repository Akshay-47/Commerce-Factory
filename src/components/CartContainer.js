import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeFromCart } from "../store/cart";

const CartContainer = () => {
  const cartItems = useSelector(state => state.cartData.cartItems);
  const dispatch = useDispatch();

  const CartSingleItemCard = (item, index) => {
    return (
      <div key={index} className="single-cart-item">
        <div
          onClick={() => dispatch(removeFromCart(item.id))}
          className="remove-button"
        >
          <span>&times;</span>
        </div>
        <div className="image-wrapper">
          <img src={item.poster} alt={item.name} />
        </div>
        <div className="card-content-wrapper">
          <div className="item-name">{item.name} T-Shirt</div>
          <div className="item-size">{item.size}</div>
          <div className="item-quantity">Quantity: {item.quantity}</div>
        </div>
        <div className="item-price">
          $ {calculateIndividualPrice(item.price, item.quantity)}
        </div>
      </div>
    );
  };

  const calculateIndividualPrice = (str, quantity) => {
    let temp = str.split("$");
    return Number((Number(temp[1]) * Number(quantity)).toFixed(2));
  };

  const calculateTotalPrice = items => {
    let totalSum = 0;
    items.forEach(
      item => (totalSum += calculateIndividualPrice(item.price, item.quantity))
    );
    return Number(totalSum.toFixed(2));
  };

  const renderCartItems = items => {
    return items.map((item, index) => CartSingleItemCard(item, index));
  };

  return (
    <div className="cart-container">
      <div className="cart-items-wrapper">{renderCartItems(cartItems)}</div>
      <footer className="cart-container-footer">
        <div className="display-total-section">
          <div className="text">SUBTOTAL</div>
          <div className="total">$ {calculateTotalPrice(cartItems)}</div>
        </div>
        <div className="checkout-button-wrapper">
          <button className="checkout-button">CHECKOUT</button>
        </div>
      </footer>
    </div>
  );
};
export default CartContainer;
