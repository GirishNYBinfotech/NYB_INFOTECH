import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      state.items.push(product);
      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },

    removeFromCart: (state, action) => {
      const product = state.items.find(
        item => item.id === action.payload
      );

      if (product) {
        state.totalQuantity -= 1
        state.totalPrice -= product.price
        state.items = state.items.filter(
          item => item.id !== action.payload
        )
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;