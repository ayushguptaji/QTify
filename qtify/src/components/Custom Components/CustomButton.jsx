import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ handler, text }) => {
  return (
    <>
      <Button
        sx={{ backgroundColor: "black", color: "#34c94b", textTransform: 'none' }}
        type="button"
        variant="outlined"
        name={text}
        onclick={handler}
      >
        {text}
      </Button>
    </>
  );
};

export default CustomButton;
