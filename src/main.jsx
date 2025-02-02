import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BuyBook from "./Components/BuyBook/BuyBook";
import CardDetails from "./Components/CardDetails/CardDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Library from "./Components/Library/Library";
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
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/buy",
        element: <BuyBook />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
