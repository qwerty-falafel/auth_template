import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./redux/AuthReducer";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
