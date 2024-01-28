import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [],
}
const AddToCartSlice = createSlice({
    name: 'AddToCart',
    initialState:initialState,
    reducers:{
        setToCart: (state, action) => {
            state.data.push(action.payload);
          },
          removeToCart: (state, action) =>{
            const itemToRemove = action.payload;
            // state.data = state.data.filter(item => item.id !== itemToRemove.id);
            const indexToRemove = state.data.findIndex(item => item.id === itemToRemove.id);
            if (indexToRemove !== -1) {
                state.data.splice(indexToRemove, 1);
            }
          },
          removeAllToCart: (state, action) =>{
            const itemToRemove = action.payload;
            state.data = state.data.filter(item => item.id !== itemToRemove.id);
            
          }
    }
});
export const { setToCart,removeToCart,removeAllToCart} = AddToCartSlice.actions;
export default AddToCartSlice.reducer;
