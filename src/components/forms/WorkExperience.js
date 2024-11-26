import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWork, updateWork, deleteWork } from '../../redux/slices/workSlice';
import { Button, TextField, Box } from '@mui/material';

const WorkExperience = () => {
  const dispatch = useDispatch();
  const workList = useSelector((state) => state.work.workList);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [duration, setDuration] = useState('');

  const handleAdd = () => {
    dispatch(addWork({ company, role, duration }));
    setCompany('');
    setRole('');
    setDuration('');
  };

  return (
    <Box>
      <TextField
        label="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleAdd}>
        Add Work Experience
      </Button>
      {workList.map((work, index) => (
        <Box key={index} sx={{ marginTop: 2 }}>
          <strong>{work.company}</strong> - {work.role} ({work.duration})
        </Box>
      ))}
    </Box>
  );
};

export default WorkExperience;
