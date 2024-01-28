// apiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
selectItem:"ideal",
  
};


const ShoppingItemsSlice = createSlice({
  name: 'ElectronicItems',
  initialState,
  reducers: {
    setToElectronic: (state, action) => {
        state[action.payload] = "electronicItem";
      },
      setToHome: (state, action) => {
        state[action.payload] = "ideal";
      },
      setToFashion: (state, action) => {
        state[action.payload] = "Fashion";
      },
      setToCart: (state, action) => {
        state[action.payload] = "CartItems";
      },
  },
 
});
export const { setToHome, setToElectronic,setToFashion,setToCart} = ShoppingItemsSlice.actions;
export default ShoppingItemsSlice.reducer;
