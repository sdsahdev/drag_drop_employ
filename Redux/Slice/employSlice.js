import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const employSlice = createSlice({
  name: 'employ',
  initialState: {
    employ: [],
  },
  reducers: {
      addEmploy: (state, action) => {
        console.log("Current state:", state);
          state.employ = [...state.employ, action.payload];
      AsyncStorage.setItem('employ', JSON.stringify(state.employ));
    },

    updateAllEmploy: (state, action) => {
        if (action.payload) {
            state.employ = [];
            console.log(action.payload, "====updatedata");
            state.employ = action.payload;
        }
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
