import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilterAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilterAction } = filterSlice.actions;

export default filterSlice.reducer;
