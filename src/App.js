import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom"; //Link
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { AppContext } from "./libs/contextLib";
import { onError } from "./libs/errorLib";
import Routes from "./Routes1";
import Navbar from "components/Navbars/Navbar.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
// import dealerSidebarRoutes from "dealerSidebarRoutes.js";
// import adminSidebarRoutes from "adminSidebarRoutes.js";
// import bgImage from "assets/img/sidebar-2.jpg";
// import logo from "assets/img/reactlogo.png";
import routes from "routes.js";
import "./App.css";

function App({ ...rest }) {
  const history = useHistory();

  const [mobileOpen, setMobileOpen] = useState(false);
  // const [image] = useState(bgImage);
  // const [color] = useState("blue");

  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isLoggedOut, userHasLoggedOut] = useState(false);
  const [isAdmin, userIsAdmin] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);

      setOpenSnackbar(true);
    } catch (e) {
      if (e !== "No current user") {
        onError(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    userHasLoggedOut(true);
    setOpenSnackbar(true);
    history.push("/login");
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    !isAuthenticating && (
      <div>
        {isAuthenticated ? (
          !isAdmin ? (
            <>
              <Navbar
                routes={routes}
                handleDrawerToggle={handleDrawerToggle}
                handleLogout={handleLogout}
                isAdmin={isAdmin}
                {...rest}
              />
              {/* <Sidebar
                routes={dealerSidebarRoutes}
                logoText={"FINANCIAL SERVICES"}
                logo={logo}
                image={image}
                handleDrawerToggle={handleDrawerToggle}
                open={mobileOpen}
                color={color}
                {...rest}
              /> */}
            </>
          ) : (
            <>
              <Navbar
                routes={routes}
                handleDrawerToggle={handleDrawerToggle}
                handleLogout={handleLogout}
                isAdmin={isAdmin}
                {...rest}
              />
              {/* <Sidebar
                routes={adminSidebarRoutes}
                logoText={"FINANCIAL SERVICES"}
                logo={logo}
                image={image}
                handleDrawerToggle={handleDrawerToggle}
                open={mobileOpen}
                color={color}
                {...rest}
              /> */}
            </>
          )
        ) : (
          <></>
        )}

        <ErrorBoundary>
          <AppContext.Provider
            value={{
              isAdmin,
              userIsAdmin,
              isAuthenticated,
              userHasAuthenticated,
              isLoggedOut,
              userHasLoggedOut,
              openSnackbar,
              setOpenSnackbar,
            }}
          >
            <Routes />
          </AppContext.Provider>
        </ErrorBoundary>
      </div>
    )
  );
}

export default App;
