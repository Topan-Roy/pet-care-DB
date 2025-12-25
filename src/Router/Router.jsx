import { createBrowserRouter } from "react-router";

import Home from "../Components/Home";
import Dashboard from "../Dashboard/Dashboard";

import NotificationPage from "../Pages/NotificationPage";
import Petowner from "../Pages/Petowner";
import Payment from "../Pages/Payment";
import PetownerDelails from "../Pages/PetownerDelails";
import PetSitter from "../Pages/PetSitter";
import PetSitterDeleils from "../Pages/PetSitterDeleils";
import PromoCode from "../Pages/PromoCode";
import BasicSettings from "../Pages/PromoEdit/BasicSettings";
import AudienceTargeting from "../Pages/PromoEdit/AudienceTargeting";
import ReviewDeploy from "../Pages/PromoEdit/ReviewDeploy";
import Categories from "../Pages/Categories";
export const router = createBrowserRouter([
 
  {
    path:"/",
    Component:Dashboard,
    children:[
      {
           index: true,        
        Component: Home,
      },
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
        {
         path:"promocode",
         Component:PromoCode
        },
        {
         path:"basicsettings",
         Component:BasicSettings
        },
        {
         path:"audiencetargeting",
         Component:AudienceTargeting
        },
        {
         path:"reviewdeploy",
         Component:ReviewDeploy
        },
        {
         path:"categories",
         Component:Categories
        },
    ]
  }
]);