
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
};

const SearchKeySlice = createSlice({
  name: 'SearchKey',
  initialState,
  reducers: {
    updateSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    clearSearchInput: (state) => {
      state.searchInput = '';
    },
  },
});

export const { updateSearchInput, clearSearchInput } = SearchKeySlice.actions;
export default SearchKeySlice.reducer;
