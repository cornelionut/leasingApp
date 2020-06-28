import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import AssignmentIcon from "@material-ui/icons/Assignment";
import NotesIcon from "@material-ui/icons/Notes";
import SettingsIcon from "@material-ui/icons/Settings";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import OfferList from "views/Assets/list/OfferList.js";
import OfferAssetList from "views/Offer/OfferAssetList.js";
import Partners from "views/Partners/Partners.js";
import TableList from "views/TableList/TableList.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";

const dashboardRoutes = [
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
  // {
  //   path: "/reports",
  //   name: "Rapoarte",
  //   icon: LibraryBooks,
  //   component: DealerCharts,
  //   layout: "/dealer",
  // },
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
    component: UpgradeToPro,
    layout: "/settings",
  },
];

export default dashboardRoutes;
