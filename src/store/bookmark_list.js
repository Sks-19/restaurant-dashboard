import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: { bookmarkData: [] },
  reducers: {
    addBookmark(state, action) {
      const newBookmark = action.payload;

      state.bookmarkData.push(newBookmark);
    },
    removeBookmark(state, action) {
      const id = action.payload;

      const filteredBookmark = state.bookmarkData?.filter(
        (book) => book.id !== id
      );

      state.bookmarkData = filteredBookmark;
    },
    updateBookmark(state, action) {
      const localBookData = action.payload;

      state.bookmarkData = localBookData;
    }
  },
});

export const bookmarkActions = bookmarkSlice.actions;

export default bookmarkSlice;
