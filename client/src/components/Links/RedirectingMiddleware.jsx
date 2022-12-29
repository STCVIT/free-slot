import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FindFreeSlot } from "../../context/FreeSlotContext";
import AddMeToTeam from "./AddMeToTeam";
const RedirectingMiddleware = () => {
  // document.title = "Scheduler";
  const { setIsLoading, setLinkUid } = FindFreeSlot();
  console.log(window.location.pathname);
  const navigate = useNavigate();
  const id = window.location.pathname;
  console.log(id);
  // setIsLoading(true);
  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("user")) {
      setLinkUid(id);
      setTimeout(navigate("/home", { replace: true }), 200);
    } else {
      setTimeout(
        navigate("/login" + window.location.pathname, { replace: true }),
        200
      );
    }
    setIsLoading(false);
  }, []);

  return <div> </div>;
};

export default RedirectingMiddleware;
