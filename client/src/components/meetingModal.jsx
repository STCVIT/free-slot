import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import axios from "axios";
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  }
  const markAsDone =
    "flex-1 items-center py-3 px-5 text-sm font-medium text-center text-white bg-myBlue rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 border-2 border-myBlue";
  const cancel =
    "flex-1 rounded px-4 items-center py-2 text-black underline bg-white border-2 border-black rounded-lg";
  const { idx, tab, refresh } = data;
  const Confirm = () => {
    return (
      <div className="flex justify-evenly mt-4 gap-x-4">
        <button
          className={markAsDone}
          onClick={() => deleteCard(idx, tab, refresh)}
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
  async function deleteCard(idx, tab, refresh) {
    // console.log("inside delete: ", idx, tab, refresh);
    return (
      await axios.delete("http://localhost:6969/", {
        data: {
          id: idx,
          tab: tab,
        },
      }),
      refresh.set(!refresh.refresh),
      handleClose()
    );
  }
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <button
        onClick={handleOpen}
        className={desc === "Mark as done" ? markAsDone : cancel + " h-full"}
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
          <Confirm />
        </Box>
      </Modal>
    </div>
  );
}
