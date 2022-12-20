import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoAlertCircle } from "react-icons/io5";
const isLg = window.matchMedia("(min-width: 1024px)").matches;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: isLg ? "50%" : "95%",
  width: "fit-content",
  bgcolor: "white",

  borderRadius: "0.5rem",
  boxShadow: 12,
  p: 4,
};

const Confirmation = ({ text }) => {
  const msg =
    text === "accept"
      ? "You are now added to the team!"
      : "Invite was rejected";
  const status =
    text === "accept" ? (
      <BsCheckCircleFill size={50} color="#2BAD75" />
    ) : (
      <IoAlertCircle size={50} color="#CC2F3F" />
    );
  return (
    <div className="flex justify-evenly items-center gap-x-8">
      <div className="text-xl">{status}</div>
      <div>{msg}</div>
    </div>
  );
};
const AddMeToTeam = () => {
  const { setIsLoading, linkUid, setLinkUid } = FindFreeSlot();
  const [linkMaker, setLinkMaker] = useState(null);
  const linkTeam = localStorage.getItem("team_name");
  const [isConfirm, setIsConfirm] = useState(null);
  useEffect(() => {
    const setUser = async () => {
      try {
        setIsLoading(true);
        const user = JSON.parse(localStorage.getItem("user"));
        const res = await axios.post("user/getUserByEmail", {
          email: user.email,
        });
        setLinkMaker(res.data.name);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    setUser();
  }, []);

  const navigate = useNavigate();
  const uid = window.location.pathname.match(
    /[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/g
  );
  const user = JSON.parse(localStorage.getItem("user"));
  const acceptHandler = async () => {
    setIsConfirm("accept");
    try {
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
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      setIsConfirm(null);
      setLinkUid(null);
      localStorage.removeItem("linkTeam");
    }, 2000);
  };
  const rejectHandler = async () => {
    //make a reject popup and redirect to home
    setIsConfirm("reject");
    setTimeout(() => {
      setIsConfirm(null);
      setLinkUid(null);
      localStorage.removeItem("linkTeam");
    }, 2000);
  };
  return (
    <>
      <div>
        <Modal
          BackdropProps={{
            style: {
              backgroundColor: "white",
              opacity: 0.8,
            },
          }}
          open={linkUid}
          // onClose={() => setIsOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {!isConfirm && (
              <div>
                <div className="text-center">
                  <span className="font-semibold">{linkMaker}</span> wants to
                  add you to team
                  <br />
                  <span className="font-semibold">{linkTeam}</span>
                </div>
                <div className="flex w-full justify-evenly my-4 items-center">
                  <button
                    className="text-white bg-myBlue p-4 border border-myBlue rounded-md"
                    onClick={acceptHandler}
                  >
                    Accept
                  </button>
                  <button
                    className="border-myBlue border p-4 rounded-md"
                    onClick={rejectHandler}
                  >
                    Reject
                  </button>
                </div>
              </div>
            )}
            {isConfirm && <Confirmation text={isConfirm} />}
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default AddMeToTeam;
