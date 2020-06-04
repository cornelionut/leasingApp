// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import AssignmentIcon from "@material-ui/icons/Assignment";
import NotesIcon from "@material-ui/icons/Notes";
import SettingsIcon from "@material-ui/icons/Settings";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import FlexDashboard from "views/FlexDashboard/FlexDashboard.js";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import OfferList from "components/Asset/list/OfferList.js";
import OfferAssetList from "views/Offer/OfferAssetList.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";

const dashboardRoutes = [
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
    path: "/user",
    name: "Partneri",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Rapoarte",
    icon: LibraryBooks,
    component: FlexDashboard,
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
];

export default dashboardRoutes;
