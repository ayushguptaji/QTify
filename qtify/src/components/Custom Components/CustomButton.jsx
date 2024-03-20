import { Button } from "@mui/material";
import React, { useState } from "react";
import CustomModal from "./CustomModal";

const CustomButton = ({ text }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        sx={{
          backgroundColor: "#121212",
          color: "#34c94b",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "black",
            color: "green"
          },
        }}
        type="button"
        variant="text"
        name={text}
        onClick={handleOpen}
      >
        {text}
      </Button>
      <CustomModal open={open} onClose={handleClose} />
    </>
  );
};

export default CustomButton;
