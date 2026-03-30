import { createBrowserRouter } from "react-router";
import mainLayout from "../Layouts/mainLayout";
import Home from "../Pages/Home/Home";
import Couverage from "../Pages/Home/Couverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Couverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
    ],
  },
]);
