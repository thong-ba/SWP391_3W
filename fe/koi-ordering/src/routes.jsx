import { createBrowserRouter, Navigate } from 'react-router-dom';

import Homepage from "./assets/user/homepage/homepage";
import LoginPage from './assets/user/login/Login';
import RegisterPage from './assets/user/register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  }
]);