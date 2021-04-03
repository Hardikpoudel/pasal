import { createStore, combineReducers, applyMiddleware } from "redux";

//middleware that allows you return function instead of action
//thunk exted storagibility and let you write logic that enteract with store
//it helps in passing the scyronous call to the state
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import cartItems from "./Reducers/cartItem";

const reducers = combineReducers({
  cartItems: cartItems,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
