import { createBrowserRouter } from "react-router";

import Home from "../Components/Home";
import Dashboard from "../Dashboard/Dashboard";
import Pay from "../Components/Pay";
export const router = createBrowserRouter([
  {
    path: "/home",
   Component:Home
  },
  {
    path:"/dashboard",
    Component:Dashboard,
    children:[
        {
         path:"pay",
         Component:Pay
   
        }
    ]
  }
]);