import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import ActivitiesList from './components/ActivitiesList/ActivitiesList';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './routes/ProjectRoot';
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
    children: [
      {
        index: true, element: <div>Index placeholder</div>,
      },
      {
        path: "home/",
        element: <UserDetails/>,
      }, 
      {
        path: "activities/",
        element: <ActivitiesList/>,
      },
      {
        path: "about/",
        element: <About/>,
      },
    ],
  },
]);

export default router;