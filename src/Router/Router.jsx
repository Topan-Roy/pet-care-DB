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
import Report from "../Pages/Report";
import SettingsMenu from "../Pages/Setting/SettingsMenu";
import PersonalInformation from "../Pages/Setting/PersonalInformation";
import PersonalInfo from "../Pages/Setting/PersonalInfo";
import TermsCondition from "../Pages/Setting/TermsCondition";
import EditTermsAndConditions from "../Pages/Setting/EditTermsAndConditions";
import PrivacyPolicy from "../Pages/Setting/PrivacyPolicy";
import EditPrivacyPolicy from "../Pages/Setting/EditPrivacyPolicy";
import FAQTable from "../Pages/Setting/FAQTable";



export const router = createBrowserRouter([

  {
    path: "/",
    Component: Home
  },
  {
    path: "/dashoard",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "payment",
        Component: Payment
      },
      {
        path: "notificationpage",
        Component: NotificationPage
      },
      {
        path: "petowner",
        Component: Petowner
      },
      {
        path: "petownerdelails",
        Component: PetownerDelails
      },
      {
        path: "petsitter",
        Component: PetSitter
      },
      {
        path: "petsitterdeleils",
        Component: PetSitterDeleils
      },
      {
        path: "promocode",
        Component: PromoCode
      },
      {
        path: "basicsettings",
        Component: BasicSettings
      },
      {
        path: "audiencetargeting",
        Component: AudienceTargeting
      },
      {
        path: "reviewdeploy",
        Component: ReviewDeploy
      },
      {
        path: "categories",
        Component: Categories
      },
      {
        path: "report",
        Component: Report
      },
      {
        path: "settingsmenu",
        Component: SettingsMenu
      },
      {
        path: "personalinformation",
        Component: PersonalInformation
      },
      {
        path: "personalinfon",
        Component: PersonalInfo
      },
      {
        path: "termscondition",
        Component: TermsCondition
      },
      {
        path: "editTermsandconditions",
        Component: EditTermsAndConditions
      },
      {
        path: "privacypolicy",
        Component:PrivacyPolicy
      },
      {
        path: "editprivacypolicy",
        Component:EditPrivacyPolicy
      },
      {
        path: "faqtable",
        Component:FAQTable
      },
     
    ]
  }
]);