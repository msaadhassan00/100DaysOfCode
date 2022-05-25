import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./features/studentSlice";

export default configureStore({
  reducer: {
    student: studentReducer,
  },
});
