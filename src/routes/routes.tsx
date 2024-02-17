import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import {  adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <div>Not Found.</div>,
  },
]);

export default router;
