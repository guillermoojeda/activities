import React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import SignUpForm from './components/signup_form/SignupForm';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline enableColorScheme/>
      <SignUpForm />
    </React.Fragment>
  );
}

export default App;
