import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/App";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import ProductDetails from "./pages/product-details";

export const routes = createBrowserRouter([
     {
          path: "/",
          element: <AppLayout />,
          children: [
               {
                    path: "/",
                    element: <Home />,
               }, {
                    path: "/about",
                    element: <About />,
               }, {
                    path: '/products',
                    element: <Products />
               }, {
                    path: '/product/:product_id',
                    element: <ProductDetails />
               }
          ]
     }
]);