import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workList: [],
};

const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    addWork: (state, action) => {
      state.workList.push(action.payload);
    },
    updateWork: (state, action) => {
      const { index, data } = action.payload;
      state.workList[index] = data;
    },
    deleteWork: (state, action) => {
      state.workList.splice(action.payload, 1);
    },
  },
});

export const { addWork, updateWork, deleteWork } = workSlice.actions;
export default workSlice.reducer;
