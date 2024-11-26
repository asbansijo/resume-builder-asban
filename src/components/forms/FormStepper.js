import React, { useState } from 'react';
import { Box, useTheme, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Projects from './Projects';
import jsPDF from 'jspdf';

const FormStepper = () => {
  const steps = ['Personal Info', 'Education', 'Work Experience', 'Skills', 'Projects'];
  const [activeStep, setActiveStep] = useState(0);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const theme = useTheme();

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <Education />;
      case 2:
        return <WorkExperience />;
      case 3:
        return <Skills />;
      case 4:
        return <Projects />;
      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setIsFormCompleted(true);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const downloadResume = () => {
    const doc = new jsPDF();

    doc.text('Resume', 20, 20);
    doc.text('Personal Info:', 20, 30);
    doc.text('Name: John Doe', 30, 40); 
    doc.text('Education:', 20, 60);
    doc.text('School: ABC University', 30, 70); 

    // Save the PDF
    doc.save('resume.pdf');
  };

  const previewStyle = {
    color: theme.palette.mode === 'dark' ? 'black' : 'inherit',
  };

  if (isFormCompleted) {
    return (
      <Box>
        <Typography variant="h5" sx={previewStyle}>
          Hey! Here is your resume
        </Typography>
        <Button variant="contained" onClick={() => setIsFormCompleted(false)}>
          Edit Resume
        </Button>
        <Button
          variant="outlined"
          sx={{ marginLeft: 2 }}
          onClick={downloadResume}
        >
          Download as PDF
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ marginTop: 4 }}>{renderStepContent(activeStep)}</Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>

        <Button variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default FormStepper;
