'use client';
import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/cart";
export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  // write your reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;