import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import SignUpForm from './components/SignupForm/SignupForm';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Box sx={{
            // backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg)',
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NlIBVhpWQUFer-h0c1_eOXkB63wwdv29kvm32Pgvjg&s)',
            width: '100%',
            minHeight: '100vh',
            height: '100%', 
            border: '1px solid black',
            boxizing: 'border-box',
            display: 'flex',
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            // backgroundRepeat: 'repeat',
        }}>
          <CssBaseline enableColorScheme/>
          <RouterProvider router={router} />
        </Box>   
      </Provider> 
    </React.Fragment>
  );
}

export default App;
