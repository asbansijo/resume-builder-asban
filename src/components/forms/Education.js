import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEducation, updateEducation, deleteEducation } from '../../redux/slices/educationSlice';
import { Button, TextField, Box } from '@mui/material';

const Education = () => {
  const dispatch = useDispatch();
  const educationList = useSelector((state) => state.education.educationList);
  const [institution, setInstitution] = useState('');
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');

  const handleAdd = () => {
    dispatch(addEducation({ institution, degree, year }));
    setInstitution('');
    setDegree('');
    setYear('');
  };

  return (
    <Box>
      <TextField
        label="Institution"
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Year of Passing"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleAdd}>
        Add Education
      </Button>
      {educationList.map((edu, index) => (
        <Box key={index} sx={{ marginTop: 2 }}>
          <strong>{edu.institution}</strong> - {edu.degree} ({edu.year})
        </Box>
      ))}
    </Box>
  );
};

export default Education;
