import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../store/cart";

const CardItem = () => {
  const products = useSelector(state => state.productData.products);

  return <div className="products">{<RenderCards products={products} />}</div>;
};

export default CardItem;

const RenderCards = ({ products }) => {
  const filters = useSelector(state => state.filterBy);
  const dispatch = useDispatch();
  const [didLoad, setDidLoad] = useState(false);

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
  const itemsToDisplay = filterBy(products, filters);
  return itemsToDisplay.map((product, index) => {
    return (
      <div key={index} className="card-wrapper">
        <div className="image-wrapper">
          <img
            onLoad={() => {
              setDidLoad(true);
            }}
            src={product.poster}
            alt={product.name}
          />
          {!didLoad && <div className="loader">Loading...</div>}
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
