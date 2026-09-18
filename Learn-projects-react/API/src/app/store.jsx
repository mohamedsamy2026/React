import { configureStore } from "@reduxjs/toolkit";
import apiReduser from "../features/api/apiSlice";

export default configureStore({
  reducer: {
    apiFeatch: apiReduser,
  },
});
