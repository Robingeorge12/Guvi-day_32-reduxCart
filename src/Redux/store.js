import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cart";
// import cartReducer from '../Redux/cart'

export const store = configureStore({
  reducer: {
    cartData: cartReducer,
    // productData:productReducer,
  },
});
