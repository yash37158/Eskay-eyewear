import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item)=> item._id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      // const item = state.cart.find((item) => item._id === action.payload);
      // if(item.quantity === 1){
      //   item.quantity = 1
      // } else {
      //   item.quantity--;
      // }
    },
    
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    }
  },
});

export const { 
  addProduct,
  incrementQuantity,
  decrementQuantity,
  removeItem

} = cartSlice.actions;
export default cartSlice.reducer;