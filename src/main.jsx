import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardDetails from "./Components/CardDetails/CardDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Books from "./Components/Paiges/Books";
import Home from "./Components/Paiges/Home";
import Read from "./Components/Paiges/Read";
import RootFile from "./Components/Root/RootFile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootFile />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/read",
        element: <Read />,
      },
      {
        path: "/cardDetails/:id",
        element: <CardDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
