import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navi from './components/nav.jsx';
import Login from './pages/login.jsx';
import Login2 from './pages/login2.jsx';
import Login3 from './pages/login3.jsx';
import Student from './pages/student.jsx';
import Prof from './pages/prof.jsx';
import Admin from './pages/admin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login/student",
    element: <Login/>
  },
  {
    path: "/login/admin",
    element: <Login3/>
  },
  {
    path: "/login/educator",
    element: <Login2/>
  },
  {
    path: "/student",
    element: <Student/>
  },
  {
    path: "/prof",
    element: <Prof/>
  },
  {
    path: "/admin",
    element: <Admin/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navi/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
