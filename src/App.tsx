import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:'/product',
    element:<Product></Product>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
