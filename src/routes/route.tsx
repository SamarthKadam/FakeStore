import Cart from '../pages/Cart';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../pages/Home';
import Product from '../pages/Product';
import Root from '../pages/Root';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/:id',
                element: <Product></Product>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            }, {
                path: '*',
                element: <Home></Home>
            }
        ]
    },

]);

export default function Route() {
    return (
        <RouterProvider router={router} />
    )
}
