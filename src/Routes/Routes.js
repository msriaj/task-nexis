import AuthLayout from "../Layout/AuthLayout";
import Attendance from "../Page/Attendance/Attendance";
import SignUp from "../Page/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Login } = require("../Page/Login/Login");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/attendance",
    element: <Attendance />,
  },
]);
