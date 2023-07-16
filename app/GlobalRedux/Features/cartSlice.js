"use client";
import { createSlice } from "@reduxjs/toolkit";

export const getBasketTotal = (items) =>
  items.reduce((amount, item) => item.price + amount, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    notification: "",
  },
  reducers: {
    addItem: (state, action) => {
      const { id, title, price, priceId, productImage, productDescription } = action.payload;
      console.log("addItem:", action.payload);
      // Check if the item already exists in the cart
      const itemExists = state.items.some((item) => item.id === id);

      if (itemExists) {
        state.notification = "Item already in cart";
        return;
      }

      state.items.push({ id, title, price, priceId, productImage, productDescription });
      state.notification = "Item added in cart";

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    addItemWithQuantity: (state, action) => {
      const { id, item, price, productImage, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (quantity === 0) {
        return;
      }
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, item, price, productImage, quantity });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    addQuantity: (state, action) => {
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      //console.log("removeItem:", action.payload)
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
    },
    clearNotification: (state) => {
      state.notification = "";
    },
  },
});

export const {
  addItem,
  removeItem,
  removeFromCart,
  clearCart,
  addQuantity,
  addItemWithQuantity,
  clearNotification,
} = cartSlice.actions;

export default cartSlice.reducer;
