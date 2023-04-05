import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { centeredBox, cardStyle } from '../muiStylesObjects';
import Copyright from '../Copyright/Copyright';
import TextInput from '../../shared_components/TextInput';
import { requestAccess } from '../../databaseMock/actions';


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// 1 numeric digit, 1 lower case letter, 1 upper case letter, 5 chars minimum.

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginForm = () => {

  const [snackOpen, setSnackOpen] = useState(false);
  const [ans, setAns] = useState({});
  const [outcome, setOutcome] = useState('info')

  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackOpen(false);
  };

  const submitAction = async (loginData) => {
    const ans = await requestAccess(loginData);
    setAns(ans);
    if (ans.success) {
      const { name, lastname, email, age, activities } = ans.userData;
      const user = { 
        name,
        lastname,
        email,
        age,
      };
      window.localStorage.setItem('user', JSON.stringify(user));
      window.localStorage.setItem('activities', JSON.stringify(user));
      navigate("/app/home");
    } else {
      setSnackOpen(true);
      setOutcome('error');
      return 'Error';
    }
  };

  return (
    <Box sx={centeredBox}>
      <Typography variant="h4" align="center">
        Welcome to Do Something!!!
      </Typography>
      <Typography variant="body1" align="center">
        Enter your email and password to log in.<br/>
        (Or try email pruebas@pruebas.com and password 11aaBB.)
      </Typography>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => { // we simulate async call
            setSubmitting(false);
          }, 400);
          const ans = submitAction(values);
          return ans;
        }}
      > 
        <Card
              variant="outlined"
              sx={cardStyle}
        >
          <Form>
              <TextInput
                label="Email Address"
                name="email"
                type="text"
                placeholder="Your email"
              />

              <TextInput
                label="Password"
                name="password"
                type="password"
                placeholder="Your password"
              />
              <Box textAlign='center'>
                <Button type="submit" variant="contained" sx={{marginTop: '1rem'}}>Login</Button>
              </Box>
          </Form>
        </Card>
      </Formik>
      <Snackbar 
        open={snackOpen} 
        autoHideDuration={4000} 
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{minWidth:'80vw'}}
      >
        <Alert onClose={handleClose} severity={outcome} sx={{ width: '100%' }}>
          {
            outcome === 'success' ? 
            <span>Login successful</span> :
            <span>Error during login: {ans.message}</span>
          }
        </Alert>
      </Snackbar>
      <Typography variant="body1" align="center" sx={{marginTop:'1rem'}}>
        Need to create an account? 
        <Link color='primary' href='/signup'>Sign up.</Link>
      </Typography>
      <Copyright />
    </Box>
  );
};

export default LoginForm;
