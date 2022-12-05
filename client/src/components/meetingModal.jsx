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
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
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
    "flex-1 items-center py-3 px-5 text-sm font-medium text-center text-white bg-myBlue rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300";
  const cancel =
    "flex-1 rounded px-4 items-center py-2 text-black hover:underline bg-white ";
  const { idx, tab, refresh } = data;
  const Confirm = () => {
    return (
      <div className="flex justify-between">
        <button onClick={() => deleteCard(idx, tab, refresh)}>Yes</button>
        <button onClick={handleClose}>No</button>
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
        className={desc === "Mark as done" ? markAsDone : cancel}
      >
        {desc}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">
            {desc === "Mark as done"
              ? "Are you sure you want to mark this event as done?"
              : "Are you sure you want to cancel this event?"}
          </h2>
          <Confirm />
        </Box>
      </Modal>
    </div>
  );
}
