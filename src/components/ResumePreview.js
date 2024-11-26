import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Divider } from '@mui/material';

const ResumePreview = () => {
  const personal = useSelector((state) => state.personal || {});
  const educationList = useSelector((state) => state.education.educationList || []);
  const workList = useSelector((state) => state.work.workList || []);
  const skills = useSelector((state) => state.skills.skills || []);
  const projects = useSelector((state) => state.projects.projects || []); 

  return (
    <Box sx={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
        {personal.name || 'Your Name'}
      </Typography>
      <Typography variant="body1">{personal.email || 'your.email@example.com'}</Typography>
      <Typography variant="body1">{personal.phone || '123-456-7890'}</Typography>
      <Typography variant="body1">{personal.linkedin || 'linkedin.com/in/yourprofile'}</Typography>
      <Typography variant="body1">{personal.github || 'github.com/yourprofile'}</Typography>

      <Divider sx={{ marginY: '16px' }} />

      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Education
      </Typography>
      {educationList.length > 0 ? (
        educationList.map((edu, index) => (
          <Box key={index} sx={{ marginBottom: '8px' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {edu.institution}
            </Typography>
            <Typography variant="body2">
              {edu.degree} ({edu.year})
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ color: 'gray' }}>
          No education details added.
        </Typography>
      )}

      <Divider sx={{ marginY: '16px' }} />

      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Work Experience
      </Typography>
      {workList.length > 0 ? (
        workList.map((work, index) => (
          <Box key={index} sx={{ marginBottom: '8px' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {work.company}
            </Typography>
            <Typography variant="body2">{work.role}</Typography>
            <Typography variant="body2">{work.duration}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ color: 'gray' }}>
          No work experience added.
        </Typography>
      )}

      <Divider sx={{ marginY: '16px' }} />

      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Skills
      </Typography>
      {skills.length > 0 ? (
        <Box>
          {skills.map((skill, index) => (
            <Typography key={index} variant="body2" sx={{ display: 'inline-block', marginRight: '8px' }}>
              {skill}
            </Typography>
          ))}
        </Box>
      ) : (
        <Typography variant="body2" sx={{ color: 'gray' }}>
          No skills added.
        </Typography>
      )}

      <Divider sx={{ marginY: '16px' }} />

      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Projects
      </Typography>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <Box key={index} sx={{ marginBottom: '8px' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {project.title}
            </Typography>
            <Typography variant="body2">{project.description}</Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'gray' }}>
              Technologies used: {project.technologies}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ color: 'gray' }}>
          No projects added.
        </Typography>
      )}
    </Box>
  );
};

export default ResumePreview;
