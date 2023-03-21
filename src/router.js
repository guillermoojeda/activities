import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import ActivitiesList from './components/ActivitiesList/ActivitiesList';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from "./routes/Root";
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import UserDetails from './components/UserDetails/UserDetails';
import About from './components/About/About';


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
        element: <ActivitiesList/>,
        // loader: contactLoader, // Should create its own function, although it works as contactLoader in this case.
        // action: editAction,
      },
      {
        path: "about/",
        element: <About/>,
        // loader: contactLoader, // Should create its own function, although it works as contactLoader in this case.
        // action: editAction,
      },
    ],
  },
]);

export default router;