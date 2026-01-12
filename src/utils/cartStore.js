import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Each item added individually
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // Add item as before
    },

    removeItem: (state, action) => {
      // Remove ONE instance of the clicked item
      const index = state.items.findIndex(
        (i) => i.id === action.payload.id
      );
      if (index !== -1) {
        state.items.splice(index, 1); // remove only that instance
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
