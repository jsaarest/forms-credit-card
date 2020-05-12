import React from 'react';
import './App.css';
import Form from './components/Form';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Form/>
    </ThemeProvider>
  );
}

export default App;
