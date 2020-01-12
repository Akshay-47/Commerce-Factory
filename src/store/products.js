import data, { T_SHIRT_SIZES } from "../dummy-data/data";

const initialState = {
  products: data,
  sizes: T_SHIRT_SIZES
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case value:

    //     break;

    default:
      return state;
  }
};

export default productsReducer;
