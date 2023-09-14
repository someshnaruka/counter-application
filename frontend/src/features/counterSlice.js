import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Usercounter: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterData: (state, action) => {
      state.Usercounter = [...action.payload];
    },
    Newcounter: (state, action) => {
      state.Usercounter.push(action.payload);
    },
    AddCounter: (state, action) => {
      const index = state.Usercounter.findIndex(
        (item) => item._id === action.payload
      );

      let count = state.Usercounter[index].counter;
      count = count + 1;
      state.Usercounter[index].counter = count;
    },
    Subcounter: (state, action) => {
      const index = state.Usercounter.findIndex(
        (item) => item._id === action.payload
      );
      let count = state.Usercounter[index].counter;
      if (count > 0) {
        count = count - 1;
        state.Usercounter[index].counter = count;
      }
    },
    deleteCounter: (state, action) => {
      const data = state.Usercounter.filter(
        (item) => item._id != action.payload
      );
      state.Usercounter = data;
    },
  },
});

export const {
  counterData,
  Newcounter,
  AddCounter,
  Subcounter,
  deleteCounter,
} = counterSlice.actions;
export default counterSlice.reducer;
