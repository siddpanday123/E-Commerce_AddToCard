// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {ShoppingItemsData} from '../../Api/AppData';

const initialState = {
  apiStatus: 'ideal',
  error: null,
  data: [ ],
};

// export const ShoppingItems = createAsyncThunk('ShoppingItems', async () => {
//     //  const res = await AppData.ShoppingItems();
//     const res = await fetch("https://dummyjson.com/products/")
//      return res.json();
    
// });

export const ShoppingItems = createAsyncThunk('ShoppingItems', async () => {
  const res = await ShoppingItemsData();
  return res;
});

const ShoppingItemsSlice = createSlice({
  name: 'Items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ShoppingItems.pending, (state) => {
        state.apiStatus = 'loading';
      })
      .addCase(ShoppingItems.fulfilled, (state, action) => {
        state.apiStatus = 'succeeded';
        state.data = action.payload;
      })
      .addCase(ShoppingItems.rejected, (state, action) => {
        state.apiStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export default ShoppingItemsSlice.reducer;
