import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "./Components/Paiges/Books";
import Home from "./Components/Paiges/Home";
import Read from "./Components/Paiges/Read";
import RootFile from "./Components/Root/RootFile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootFile />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
