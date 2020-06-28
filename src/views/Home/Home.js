import React, { useEffect } from "react";
// import { API } from "aws-amplify";
// import { Link } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import Admin from "layouts/Admin.js";
import Dealer from "layouts/Dealer.js";
import Login from "../Login/Login";
import "./Home.css";

export default function Home() {
  const { isAuthenticated, isAdmin } = useAppContext();
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        // const notes = await loadNotes();
        //setNotes(notes);
      } catch (e) {
        onError(e);
      }

      // setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  function renderLogin() {
    return (
      <div>
        <Login />
      </div>
    );
  }

  function renderDealer() {
    return (
      <div className="notes">
        <Dealer />
      </div>
    );
  }

  function renderAdmin() {
    return (
      <div className="notes">
        <Admin path="/admin/dashboard" />
      </div>
    );
  }

  return (
    <div className="Home">
      {!isAuthenticated
        ? renderLogin()
        : !isAdmin
        ? renderDealer()
        : renderAdmin()}
    </div>
  );
}
