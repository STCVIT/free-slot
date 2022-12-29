import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FindFreeSlot } from "../../context/FreeSlotContext";
import AddMeToTeam from "./AddMeToTeam";
const RedirectingMiddleware = () => {
  document.title = "Scheduler";
  const { setIsLoading, setLinkUid } = FindFreeSlot();
  const navigate = useNavigate();
  const id = window.location.pathname;
  console.log(id);
  // setIsLoading(true);
  useEffect(() => {
    setIsLoading(true);

    localStorage.getItem("linkTeam", id);
    if (localStorage.getItem("user")) {
      // navigate("/addtoteam" + window.location.pathname, { replace: true });
      // console.log(id);
      setLinkUid(id);
      navigate("/home", { replace: true });
    } else {
      navigate("/login" + window.location.pathname, { replace: true });
    }
    setIsLoading(false);
  }, []);

  return <div> </div>;
};

export default RedirectingMiddleware;
