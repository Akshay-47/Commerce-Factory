import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFilter } from "../store/filterBy";

const LeftSection = () => {
  const dispatch = useDispatch();
  const tShirtSizes = useSelector(state => state.productData.sizes);
  const activeFilters = useSelector(state => state.filterBy);

  const checkIfActive = (activeFilters, size) => {
    if (activeFilters.includes(size)) return true;
    return false;
  };

  const renderTShirtSizes = sizes => {
    return sizes.map((size, index) => (
      <span key={index}>
        <button
          onClick={() => dispatch(toggleFilter(size))}
          className={
            "t_shirt-size-button " +
            (checkIfActive(activeFilters, size) ? "active" : "")
          }
        >
          <h3>
            <b>{size}</b>
          </h3>
        </button>
      </span>
    ));
  };
  return (
    <div className="left-section">
      <div>
        <h3>Sizes</h3>
      </div>
      <div className="button-wrapper"> {renderTShirtSizes(tShirtSizes)}</div>
    </div>
  );
};
export default LeftSection;
