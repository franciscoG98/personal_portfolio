import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "."
import Work from "./views/Work"
import Resume from "./views/Resume"
import ErrorPage from "./views/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/work",
    element: <Work />,
    errorElement: <ErrorPage />
  },
  {
    path: "/resume",
    element: <Resume />,
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
