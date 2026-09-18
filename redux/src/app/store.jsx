import { configureStore } from "@reduxjs/toolkit";
import addReducer from "../features/add/addSlice";

export default configureStore({
  reducer: {
    add: addReducer,
  },
});
