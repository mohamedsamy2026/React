import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

export const counterSlice = createSlice({
  name: "Sum",
  initialState: initialState,
  reducers: {
    add: (currentState, action) => {
      const sum = Number(action.payload.frist) + Number(action.payload.last)
      currentState.result = sum
    },
  },
});

export const { add } = counterSlice.actions;

export default counterSlice.reducer;
