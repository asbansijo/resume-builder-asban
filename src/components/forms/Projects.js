import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject, removeProject } from '../../redux/slices/projectSlice';
import { Button, TextField, Box, Typography } from '@mui/material';

const Projects = () => {
  const dispatch = useDispatch();
  
  const [project, setProject] = useState({
    title: '',
    description: '',
    technologies: '',
  });
  
  const [projectsList, setProjectsList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleAddProject = () => {
    if (project.title && project.description && project.technologies) {
      dispatch(addProject(project)); 
      setProjectsList([...projectsList, project]); 
      setProject({ title: '', description: '', technologies: '' }); 
    }
  };

  const handleRemoveProject = (index) => {
    dispatch(removeProject(index)); 
    setProjectsList(projectsList.filter((_, i) => i !== index)); 
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        Projects
      </Typography>
      
      <TextField
        label="Project Title"
        name="title"
        value={project.title}
        onChange={handleInputChange}
        fullWidth
        sx={{ marginBottom: '8px' }}
      />
      <TextField
        label="Description"
        name="description"
        value={project.description}
        onChange={handleInputChange}
        fullWidth
        sx={{ marginBottom: '8px' }}
      />
      <TextField
        label="Technologies Used"
        name="technologies"
        value={project.technologies}
        onChange={handleInputChange}
        fullWidth
        sx={{ marginBottom: '16px' }}
      />
      
      <Button variant="contained" onClick={handleAddProject}>
        Add Project
      </Button>

      <Box sx={{ marginTop: '20px' }}>
        {projectsList.map((proj, index) => (
          <Box key={index} sx={{ marginBottom: '16px' }}>
            <Typography variant="h6">{proj.title}</Typography>
            <Typography>{proj.description}</Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
              {proj.technologies}
            </Typography>
            <Button variant="outlined" color="error" onClick={() => handleRemoveProject(index)}>
              Remove
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
