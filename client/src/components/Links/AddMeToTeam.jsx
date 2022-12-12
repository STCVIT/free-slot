import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { FindFreeSlot } from "../../context/FreeSlotContext";

const AddMeToTeam = () => {
  const { linkCreator, linkTeam } = FindFreeSlot();
  const navigate = useNavigate();
  const uid = window.location.pathname.match(
    /[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/g
  );
  const user = JSON.parse(localStorage.getItem("user"));
  const acceptHandler = async () => {
    const res = await axios.post("user/getUser", {
      email: user.email,
    });
    if (res) {
      console.log(res);
      const secondResponse = await axios.patch("team/updateTeam/" + uid, {
        members: res.data.reg_no,
      });
      if (secondResponse) {
        //make a success pop up and redirect to home with timeout
      }
    }
  };
  const rejectHandler = async () => {
    //make a reject popup and redirect to home
  };
  return (
    <>
      <div>
        {linkCreator} wants to add you to team {linkTeam}
      </div>
      <div>
        <button onClick={acceptHandler}>Accept</button>
        <button onClick={rejectHandler}>Reject</button>
      </div>
    </>
  );
};

export default AddMeToTeam;
