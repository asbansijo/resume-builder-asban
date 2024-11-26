import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, Container, Paper, Button, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { store } from './redux/redux';
import FormStepper from './components/forms/FormStepper';
import ResumePreview from './components/ResumePreview';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Build Your Resume
            </Typography>
            <IconButton color="inherit" onClick={toggleTheme}>
              {themeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
          <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
            <FormStepper />
          </Paper>
          <Paper elevation={3} sx={{ padding: 4 }}>
            <ResumePreview />
          </Paper>
          
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
