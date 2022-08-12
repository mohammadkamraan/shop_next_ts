import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import usersSlice from "./usersSlice";

export default configureStore({
  reducer: {
    count: counterSlice,
    data: usersSlice,
  },
});
