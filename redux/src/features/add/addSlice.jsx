import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

export const counterSlice = createSlice({
  name: "Sum",
  initialState: initialState,
  reducers: {
    add: (currentState, action) => {
      const sum = Number(action.payload.frist) + Number(action.payload.last);
      currentState.result = sum;
    },
    minuns: (currentState, action) => {
      const { first, last } = action.payload;
      currentState.result = first - last;
    },
    portion: (currentState, action) => {
      const { first, last } = action.payload;
      currentState.result = first / last;
    },
    hit: (currentState, action) => {
      const { first, last } = action.payload;
      currentState.result = first * last;
    },
  },
});

export const { add, minuns, portion, hit } = counterSlice.actions;

export default counterSlice.reducer;
