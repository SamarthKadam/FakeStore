import Cart from './pages/Cart';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import Root from './pages/Root';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/product',
        element:<Product></Product>
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      }
    ]
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
