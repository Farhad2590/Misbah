import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';
import Contact from './Pages/Contact/Contact';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Profile from './Pages/Profile/Profile';
import Cart from './Components/Cart/Cart';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/service",
        element: <PrivateRoute><Service></Service></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>,
      },
      {
        path: "/about",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
      },
      { path: '/signin', element: <Signin /> },
      { path: '/signup', element: <Signup /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </StrictMode>,
)
