import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

//initial state there will be empty state
//begining there will be no value followed by action
//action that we want add, removing and clearing the state
const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //paylod will be the item that we pass through this action
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((cartItem) => cartItem !== action.payload);
    case CLEAR_CART:
      return (state = []);
  }
  return state;
};

export default cartItems;
