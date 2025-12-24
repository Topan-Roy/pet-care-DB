import { createBrowserRouter } from "react-router";

import Home from "../Components/Home";
import Dashboard from "../Dashboard/Dashboard";

import NotificationPage from "../Pages/NotificationPage";
import Petowner from "../Pages/Petowner";
import Payment from "../Pages/Payment";
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
         path:"payment",
         Component:Payment
   
        },
        {
         path:"notificationpage",
         Component:NotificationPage
   
        },
        {
         path:"petowner",
         Component:Petowner
   
        },
    ]
  }
]);