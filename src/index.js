import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import SinglePhones from './Component/SinglePhones';
import ShoppingCartProvider from './Context/Context';
import AllShop from './Component/shop/AllShop/AllShop';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/SinglePhones/:model",
    element: <SinglePhones />,
  },
  {
    path: "/Shop-All",
    element: <AllShop />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShoppingCartProvider>
    <RouterProvider router={router} />
  </ShoppingCartProvider>
  
);