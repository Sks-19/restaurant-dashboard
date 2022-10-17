import { createSlice } from "@reduxjs/toolkit";

const restSlice = createSlice({
  name: "restaurant",
  initialState: { restData: [] },
  reducers: {
    addRest(state, action) {
      const newRest = action.payload;

      state.restData.push({
        id: newRest.id,
        name: newRest.name,
      });
    },
    delRest(state, action) {
      const id = action.payload;
      const filteredRest = state.restData?.filter((rest) => rest.id !== id);

      state.restData = filteredRest;
    },
    updateRest(state, action) {
      const localRestData = action.payload;

      state.restData = localRestData;
    },
  },
});

export const restActions = restSlice.actions;

export default restSlice;
