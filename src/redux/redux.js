import { configureStore } from '@reduxjs/toolkit';
import personalReducer from './slices/personalSlice';
import educationReducer from './slices/educationSlice';
import workReducer from './slices/workSlice';
import skillsReducer from './slices/skillSlice';
import projectsReducer from './slices/projectSlice';

export const store = configureStore({
  reducer: {
    personal: personalReducer,
    education: educationReducer,
    work: workReducer,
    skills: skillsReducer,
    projects: projectsReducer,
  },
});
