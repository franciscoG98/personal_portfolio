import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./views/Home"
import About from "./views/About"
import Work from "./views/Work"
import Contact from "./views/Contact"
import Resume from "./views/Resume"
import ErrorPage from "./views/ErrorPage"

import "./index.css"

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
    path: "/contact",
    element: <Contact />,
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
