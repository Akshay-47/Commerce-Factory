const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const TOGGLE_CART = "TOGGLE_CART";

const initialState = {
  cartIsOpen: false,
  cartItems: []
};

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART
  };
};

export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  };
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id } = action.payload;
      const indexOfItem = state.cartItems.findIndex(item => item.id === id);
      if (indexOfItem === -1) {
        const itemToAdd = { ...action.payload };
        itemToAdd.quantity = 1;
        return {
          ...state,
          cartItems: [...state.cartItems, itemToAdd]
        };
      } else {
        const item = state.cartItems[indexOfItem];
        const itemToAdd = { ...item };
        itemToAdd.quantity = item.quantity + 1;
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, indexOfItem),
            itemToAdd,
            ...state.cartItems.slice(indexOfItem + 1)
          ]
        };
      }
    case REMOVE_FROM_CART:
      const _id = action.payload;
      const _indexOfItem = state.cartItems.findIndex(item => item.id === _id);
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, _indexOfItem),
          ...state.cartItems.slice(_indexOfItem + 1)
        ]
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartIsOpen: !state.cartIsOpen
      };
    default:
      return state;
  }
};

export default CartReducer;
