import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, removeSkill } from '../../redux/slices/skillSlice';
import { Button, TextField, Box } from '@mui/material';

const Skills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.skills);
  const [skill, setSkill] = useState('');

  const handleAdd = () => {
    dispatch(addSkill(skill));
    setSkill('');
  };

  const handleRemove = (skillToRemove) => {
    dispatch(removeSkill(skillToRemove));
  };

  return (
    <Box>
      <TextField
        label="Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleAdd}>
        Add Skill
      </Button>
      <Box sx={{ marginTop: 2 }}>
        {skills.map((skill, index) => (
          <Box key={index} sx={{ marginBottom: 1 }}>
            {skill}{' '}
            <Button size="small" onClick={() => handleRemove(skill)}>
              Remove
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
