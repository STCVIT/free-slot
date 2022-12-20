import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "../../axios";
import { toast } from "react-toastify";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import "react-toastify/dist/ReactToastify.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 12,
  borderRadius: "0.5rem",
  p: 4,
};

export default function NestedModal({ desc, data }) {
  const { setIsLoading } = FindFreeSlot();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  }
  const markAsDone =
    "flex-1 items-center py-3 px-5 text-sm w-full font-medium text-center text-white bg-myBlue rounded-md hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 border-2 border-myBlue";
  const cancel =
    "flex-1 rounded  px-4 items-center py-2 text-black underline border-[1px] border-gray-400 rounded-md";
  const { idx, refresh, setRefresh } = data;

  const Confirm = ({ action }) => {
    const handleMarkAsDone = async () => {
      // console.log(idx);
      try {
        setIsLoading(true);
        await axios
          .patch("meet/updateMeet", {
            meet_id: idx,
            status: "past",
          })
          .then((res) => {
            console.log(res);
            if (res) {
              setRefresh(!refresh);
              setOpen(false);
            }
          });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    const handleCancelMeet = async () => {
      try {
        setIsLoading(true);
        await axios.patch("meet/updateMeet", {
          meet_id: idx,
          status: "cancelled",
        });
        setRefresh(!refresh);
        setOpen(false);
        setIsLoading(true);
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <div className="flex justify-evenly mt-4 gap-x-4">
        <button
          className={markAsDone}
          onClick={action === "done" ? handleMarkAsDone : handleCancelMeet}
        >
          Yes
        </button>
        <button className={cancel} onClick={handleClose}>
          No
        </button>
      </div>
    );
  };
  //   console.log(idx, tab, refresh);

  return (
    <div className="w-full">
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <button
        onClick={handleOpen}
        className={
          desc === "Mark as done" ? markAsDone : cancel + " h-full w-full"
        }
      >
        {desc}
      </button>
      <Modal
        BackdropProps={{
          style: {
            backgroundColor: "white",
            opacity: 0.8,
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "fit-content" }}>
          <h2
            id="parent-modal-title"
            className="text-center font-medium leading-6 text-xl"
          >
            Are you sure you want to <br />{" "}
            {desc === "Mark as done"
              ? "mark this event as done?"
              : "cancel this event?"}
          </h2>
          <Confirm action={desc === "Mark as done" ? "done" : "cancel"} />
        </Box>
      </Modal>
    </div>
  );
}
