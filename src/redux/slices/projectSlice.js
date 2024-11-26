import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {

    addProject: (state, action) => {
      state.projects.push(action.payload);
    },

    updateProject: (state, action) => {
      const { index, project } = action.payload;
      state.projects[index] = project;
    },

    removeProject: (state, action) => {
      const index = action.payload;
      state.projects.splice(index, 1);
    },

    clearProjects: (state) => {
      state.projects = [];
    },
  },
});


export const { addProject, updateProject, removeProject, clearProjects } = projectsSlice.actions;


export default projectsSlice.reducer;
