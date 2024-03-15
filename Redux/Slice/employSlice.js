import {createSlice} from '@reduxjs/toolkit';

const employSlice = createSlice({
  name: 'employ',
  initialState: {
    employ: [],
  },
  reducers: {
    addEmploy: (state, action) => {
      state.employ.push(action.payload);
    },

    updateAllEmploy: (state, action) => {
      state.employ = action.payload;
    },

      deleteEmployById: (state, action) => {
      state.employ = state.employ.filter(
        employee => employee.id !== action.payload,
      );
    },
  },
});

export const {addEmploy, updateAllEmploy, deleteEmployById} =
  employSlice.actions;
export default employSlice.reducer;
