import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import TextInput from '../../shared_components/TextInput';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// 1 numeric digit, 1 lower case letter, 1 upper case letter, 5 chars minimum.

const centeredBox = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: {
    xs: '0',
    sm: '2.5rem',
    md: '5rem',
  },
  width: {
    xs: '100%',
    sm: '75%',
    md: '50%',
  },
  maxWidth: '40rem',
  border: '3px solid green',
  padding: '10px',
}

// centeredTitle = {

// }

const SignUpForm = () => {
  return (
    <Box sx={centeredBox}>
      <Typography variant="h4" align="center">Welcome to Midas Challenge!!!</Typography>
      <Typography variant="body1" align="center">Create your user by submitting the required info.</Typography>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(3, 'Must contain at least 3 characters')
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .min(3, 'Must contain at least 3 characters')
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          age: Yup.number()
            .required('Required')
            .test(
              'Is positive?', 
              'Must be greater than 0', 
              (value) => value > 0
            ),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .matches(passwordRules, { message: "Please create a stronger password" })
            .required("Required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      > 
        <Card
              variant="outlined"
              sx={{
                marginTop: '20px',
                marginBottom: '20px',
                margin: 'auto',
                borderRadius: '20px,',
                maxWidth: '30rem',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 'solid',
              }}
        >
          <Form>
            
              <TextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Jane"
              />

              <TextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
              />

              <TextInput
                label="Age"
                name="age"
                type="number"
                placeholder="jane@formik.com"
              />

              <TextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane@formik.com"
              />

              <TextInput
                label="Password"
                name="password"
                type="password"
                placeholder="jane@formik.com"
              />

              <TextInput
                label="Confirm password"
                name="confirmPassword"
                type="password"
                placeholder="jane@formik.com"
              />
                <Box textAlign='center'>
                  <Button type="submit" variant="contained">Submit</Button>
                </Box>
          </Form>
        </Card>
      </Formik>
    </Box>
  );
};

export default SignUpForm;
