import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import TextInput from '../../shared_components/TextInput';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// 1 numeric digit, 1 lower case letter, 1 upper case letter, 5 chars minimum.

const SignUpForm = () => {
  return (
    <>
      <h1>Welcome to Midas Challenge!!!</h1>
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

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
