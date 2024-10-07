import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/App";
import Home from "./pages/home";

export const routes = createBrowserRouter([
     {
          path: "/",
          element: <AppLayout />,
          children: [
               {
                    path: "/",
                    element: <Home />
               }
          ]
     }
]);