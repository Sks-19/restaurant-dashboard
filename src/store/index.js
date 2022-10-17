import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import bookmarkSlice from "./bookmark_list";
import restSlice from "./res_list";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    restaurant: restSlice.reducer,
    bookmark: bookmarkSlice.reducer,
  },
});

export default store;
