import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../store/cart";

const CardItem = () => {
  const products = useSelector(state => state.productData.products);
  const filters = useSelector(state => state.filterBy);
  const dispatch = useDispatch();

  const filterBy = (products, filters) => {
    if (!filters.length) return products;
    return filters.reduce((accumulator, filter) => {
      products.forEach(e => {
        if (e.size === filter) {
          accumulator.push(e);
        }
        return accumulator;
      });
      return accumulator;
    }, []);
  };

  const renderCards = products => {
    const itemsToDisplay = filterBy(products, filters);
    return itemsToDisplay.map((product, index) => {
      return (
        <div key={index} className="card-wrapper">
          <div className="image-wrapper">
            <img src={product.poster} alt={product.name} />
            <button className="free-shipping-button">Free Shipping</button>
          </div>
          <div className="card-footer">
            <div className="product-name">{product.name} T-Shirt</div>
            <div className="product-price">{product.price}</div>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="add-to-cart-button"
            >
              <h2>Add to cart</h2>
            </button>
          </div>
        </div>
      );
    });
  };

  return <div className="products">{renderCards(products)}</div>;
};

export default CardItem;
