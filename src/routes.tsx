import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/App";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import ProductDetails from "./pages/product-details";
import Careers from "./pages/careers";
import CSR from "./pages/csr";
import Contact from "./pages/contact";
import CSRDetails from "./pages/csr_details";

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
               }, {
                    path: "/careers",
                    element: <Careers />
               }, {
                    path: '/cooperate-social-responsibility',
                    element: <CSR />
               }, {
                    path: '/contact',
                    element: <Contact />
               },{
                    path: "/csr/:csr_id",
                    element: <CSRDetails />
               }
          ]
     }
]);