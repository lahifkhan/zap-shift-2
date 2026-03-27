import { createBrowserRouter } from "react-router";
import mainLayout from "../Layouts/mainLayout";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
