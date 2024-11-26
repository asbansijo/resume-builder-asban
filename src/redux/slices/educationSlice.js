import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  educationList: [],
};

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    addEducation: (state, action) => {
      state.educationList.push(action.payload);
    },
    updateEducation: (state, action) => {
      const { index, data } = action.payload;
      state.educationList[index] = data;
    },
    deleteEducation: (state, action) => {
      state.educationList.splice(action.payload, 1);
    },
  },
});

export const { addEducation, updateEducation, deleteEducation } = educationSlice.actions;
export default educationSlice.reducer;
