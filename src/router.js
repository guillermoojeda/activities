import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";

// import './index.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
// import { action as destroyAction } from '../routes/destroy';
import Root from "./routes/Root";
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import UserDetails from './components/UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        index: true, element: <div>Index placeholder</div>,
      },
      {
        path: "home/",
        element: <UserDetails/>,
        // loader: contactLoader,
      }, 
      {
        path: "activities/",
        element: <div>Activities To Do placedholder</div>,
        // loader: contactLoader, // Should create its own function, although it works as contactLoader in this case.
        // action: editAction,
      },
      {
        path: "about/",
        element: <div>About this page placeholder</div>,
        // loader: contactLoader, // Should create its own function, although it works as contactLoader in this case.
        // action: editAction,
      },
    ],
  },
]);

export default router;