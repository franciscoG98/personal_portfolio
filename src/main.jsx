import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./index"
import About from "./views/About"
import Work from "./views/Work"
import Blog from "./views/Blog"
import ErrorPage from "./views/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/work",
    element: <Work />,
    errorElement: <ErrorPage />
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
