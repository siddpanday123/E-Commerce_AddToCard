import { configureStore } from '@reduxjs/toolkit'
import ShoppingItemsReducers from "./Slices/ShoppingItemsSlice"
import ElectronicItemsReducers from "./Slices/ElectronicItemsSlice"
import AddToCartReducers from "./Slices/AddToCartSlice"
export const store = configureStore({
  reducer: {
    Items: ShoppingItemsReducers ,
    ElectronicItems: ElectronicItemsReducers , 
    AddToCart:AddToCartReducers,
  },
})