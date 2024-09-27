import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Ensure correct version compatibility
import CssBaseline from '@mui/material/CssBaseline'; // For resetting styles (optional)
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

// Create a custom theme
const theme = createTheme({
  spacing: 8, // Default theme.spacing unit
  // Add more customizations if necessary (colors, typography, etc.)
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Optional: Provides consistent styling resets */}
    <Provider store={store}>
       <App />
    </Provider>
   
  </ThemeProvider>
);
