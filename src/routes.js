// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import NotesIcon from "@material-ui/icons/Notes";
import SettingsIcon from "@material-ui/icons/Settings";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import DealerCharts from "views/Dashboard/Charts/DealerCharts.js";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import Assets from "views/Assets/edit/Assets.js";
import OfferList from "views/Assets/list/OfferList.js";
import OfferAssetList from "views/Offer/OfferAssetList.js";
import Products from "views/Products/Products.js";
import Partners from "views/Partners/Partners.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Login from "views/Login/Login";
import ResetPassword from "views/Login/ResetPassword/ResetPassword";
import Settings from "./views/Settings/Settings";
import ChangeEmail from "./views/Login/ChangeEmail/ChangeEmail";
import ChangePassword from "./views/Login/ChangePassword/ChangePassword";
import App from "./App";

const dashboardRoutes = [
  //Routes for login
  {
    path: "/login",
    name: "Login",
    icon: LockOpenIcon,
    component: Login,
    layout: "/login",
  },

  {
    path: "/reset",
    name: "Reset",
    icon: LockOpenIcon,
    component: ResetPassword,
    layout: "/login",
  },

  //Routes for Admin
  {
    path: "/dashboard",
    name: "Panou central",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/offer",
    name: "Oferte",
    icon: AssignmentIcon,
    component: OfferList,
    layout: "/admin",
  },
  {
    path: "/GetOffer",
    name: "Detalii autoturisme",
    icon: NotesIcon,
    component: OfferAssetList,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Dosare",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/partners",
    name: "Parteneri",
    icon: Person,
    component: Partners,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Utilizator",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/reports",
    name: "Rapoarte",
    icon: LibraryBooks,
    component: DealerCharts,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Loguri",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notificari",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "Setari",
    icon: SettingsIcon,
    //component: UpgradeToPro,
    layout: "/settings",
  },
  {
    path: "/editOffer/assets",
    name: "Oferte",
    icon: AssignmentIcon,
    component: Assets,
    layout: "/admin",
  },
  {
    path: "/editOffer/products",
    name: "Produse",
    icon: AssignmentIcon,
    component: Products,
    layout: "/admin",
  },
  {
    path: "/Login",
    name: "Login",
    icon: LibraryBooks,
    component: App,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Setari",
    component: Settings,
    layout: "/admin",
  },
  {
    path: "/changeEmail",
    name: "Actualizeaza email",
    component: ChangeEmail,
    layout: "/admin",
  },
  {
    path: "/changePassword",
    name: "Actulizeaza parola",
    component: ChangePassword,
    layout: "/admin",
  },

  //Routes for dealer
  {
    path: "/dashboard",
    name: "Panou central",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/dealer",
  },
  {
    path: "/offer",
    name: "Oferte",
    icon: AssignmentIcon,
    component: OfferList,
    layout: "/dealer",
  },
  {
    path: "/GetOffer",
    name: "Detalii autoturisme",
    icon: NotesIcon,
    component: OfferAssetList,
    layout: "/dealer",
  },
  {
    path: "/table",
    name: "Dosare",
    icon: "content_paste",
    component: TableList,
    layout: "/dealer",
  },
  {
    path: "/partners",
    name: "Parteneri",
    icon: Person,
    component: Partners,
    layout: "/dealer",
  },
  {
    path: "/user",
    name: "Utilizator",
    icon: Person,
    component: UserProfile,
    layout: "/dealer",
  },
  {
    path: "/reports",
    name: "Rapoarte",
    icon: LibraryBooks,
    component: DealerCharts,
    layout: "/dealer",
  },
  {
    path: "/icons",
    name: "Loguri",
    icon: BubbleChart,
    component: Icons,
    layout: "/dealer",
  },
  {
    path: "/notifications",
    name: "Notificari",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/dealer",
  },
  {
    path: "/rtl-page",
    name: "Setari",
    icon: SettingsIcon,
    //component: UpgradeToPro,
    layout: "/settings",
  },
  {
    path: "/editOffer/assets",
    name: "Oferte",
    icon: AssignmentIcon,
    component: Assets,
    layout: "/dealer",
  },
  {
    path: "/editOffer/products",
    name: "Produse",
    icon: AssignmentIcon,
    component: Products,
    layout: "/dealer",
  },
  {
    path: "/Login",
    name: "Login",
    icon: LibraryBooks,
    component: App,
    layout: "/dealer",
  },
  {
    path: "/settings",
    name: "Setari",
    component: Settings,
    layout: "/dealer",
  },
  {
    path: "/changeEmail",
    name: "Actualizeaza email",
    component: ChangeEmail,
    layout: "/dealer",
  },
  {
    path: "/changePassword",
    name: "Actualizeaza parola",
    component: ChangePassword,
    layout: "/dealer",
  },
];

export default dashboardRoutes;
