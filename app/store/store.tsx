'use client';
import { configureStore } from "@reduxjs/toolkit";
import { CartSlice , } from "./slices/cart";
import { ProductSlice } from "./slices/product";
import { orderSlice } from "./slices/order";
import { AuthSlice } from "./slices/auth";
export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    products: ProductSlice.reducer,
    orders: orderSlice.reducer,
    auth: AuthSlice.reducer,
  // write your reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;