import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill: (state, action) => {
      if (!state.skills.includes(action.payload)) {
        state.skills.push(action.payload);
      }
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
    },
  },
});

export const { addSkill, removeSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
