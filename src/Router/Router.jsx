import { createBrowserRouter } from "react-router";

import Home from "../Components/Home";
import Dashboard from "../Dashboard/Dashboard";

import NotificationPage from "../Pages/NotificationPage";
import Petowner from "../Pages/Petowner";
import Payment from "../Pages/Payment";
import PetownerDelails from "../Pages/PetownerDelails";
import PetSitter from "../Pages/PetSitter";
import PetSitterDeleils from "../Pages/PetSitterDeleils";
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
        {
         path:"petownerdelails",
         Component:PetownerDelails
        },
        {
         path:"petsitter",
         Component:PetSitter
        },
        {
         path:"petsitterdeleils",
         Component:PetSitterDeleils
        },
    ]
  }
]);