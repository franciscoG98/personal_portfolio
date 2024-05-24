import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { HttpLink } from "@apollo/client";
// import { createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import Home from "./index"
import About from "./views/About"
import Work from "./views/Work"
import Resume from "./views/Resume"
import ErrorPage from "./views/ErrorPage"

// const httpLink = createHttpLink({
  // uri: '/graphql'
  // uri: "https://api.hashnode.com/",
  // mode: 'no-cors',
//   credentials: 'include'
// });

// const TOKEN = import.meta.env.VITE_HASHNODE_AUTH_TOKEN;

// const authLink = setContext((_, { headers }) => {
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${TOKEN}`,
//     }
//   }
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });

// const client = new ApolloClient({
//   uri: "https://api.hashnode.com/",
//   cache: new InMemoryCache(),
//   // credentials: 'include'
//   fetchOptions: {
//     mode: 'no-cors'
//   }
// });

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
    {/* <ApolloProvider client={client}> */}
      <RouterProvider router={router} />
    {/* </ApolloProvider> */}
  </React.StrictMode>
);
