import { createSlice } from '@reduxjs/toolkit';

const personalSlice = createSlice({
  name: 'personal',
  initialState: {
    name: '',
    email: '',
    phone: '',
    linkedIn: '',
    github: '',
  },
  reducers: {
    updatePersonal: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updatePersonal } = personalSlice.actions;
export default personalSlice.reducer;
