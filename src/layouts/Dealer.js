import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Footer from "components/Footer/Footer.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import routes from "routes.js";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "assets/img/sidebar-2.jpg";
import { store } from "../actions/store";
import { Provider } from "react-redux";
import { useAppContext } from "../libs/contextLib";
import { Container } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import AddAlert from "@material-ui/icons/AddAlert";
import MuiAlert from "@material-ui/lab/Alert";

import Sidebar from "components/Sidebar/Sidebar.js";
import dealerSidebarRoutes from "dealerSidebarRoutes.js";
import logo from "assets/img/reactlogo.png";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/dealer") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }

      return null;
    })}
    <Redirect from="/" to="/dealer/offer" />
  </Switch>
);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(styles);

export default function Dealer({ ...rest }) {
  // styles
  const classes = useStyles();

  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();

  // states and functions
  const { openSnackbar, setOpenSnackbar } = useAppContext();
  const [image, setImage] = useState(bgImage);
  const [color, setColor] = useState("blue");
  const [fixedClasses, setFixedClasses] = useState("dropdown");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [localState, setLocalState] = useState({
    loggedIn: true,
  });

  const handleImageClick = (image) => {
    setImage(image);
  };

  const handleColorClick = (color) => {
    setColor(color);
  };

  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };

  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  // initialize and destroy the PerfectScrollbar plugin
  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainPanel]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setLocalState({
      ...localState,
      loggedIn: false,
    });
  };

  return (
    <Provider store={store}>
      <Container maxWidth="lg"></Container>
      <div className={classes.wrapper}>
        <Sidebar
          routes={dealerSidebarRoutes}
          logoText={"FINANCIAL SERVICES"}
          logo={logo}
          image={image}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
          {...rest}
        />
        <div className={classes.mainPanel} ref={mainPanel}>
          {
            <Snackbar
              place="tr"
              color="info"
              icon={AddAlert}
              open={openSnackbar}
              autoHideDuration={4000}
              onClose={handleCloseSnackbar}
            >
              {<Alert severity="success">You are succesfully logged in!</Alert>}
            </Snackbar>
          }

          {/* <Navbar
            routes={routes}
            handleDrawerToggle={handleDrawerToggle}
            {...rest}
          /> */}
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {getRoute() ? <Footer /> : null}
          <FixedPlugin
            handleImageClick={handleImageClick}
            handleColorClick={handleColorClick}
            bgColor={color}
            bgImage={image}
            handleFixedClick={handleFixedClick}
            fixedClasses={fixedClasses}
          />
        </div>
      </div>
    </Provider>
  );
}
