import { FindFreeSlot } from "../../context/FreeSlotContext";
import { UserAuth } from "../../context/UserAuthContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ReactComponent as LoaderImage } from "./clockSvg.svg";
import { useState, useEffect } from "react";
const Loader = () => {
  const { isLoading } = FindFreeSlot();
  const { ttLoader } = UserAuth();
  const [isLg, setIsLg] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.matchMedia("(min-width: 1024px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",

    borderRadius: "0.5rem",

    p: 4,
  };

  return (
    <div>
      <Modal
        BackdropProps={{
          style: {
            backgroundColor: "white",
            opacity: 0.8,
          },
        }}
        open={isLoading || ttLoader}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <img src={require("./clockSvg.svg")} alt="loader" /> */}
          <LoaderImage />
        </Box>
      </Modal>
    </div>
  );
};

export default Loader;
