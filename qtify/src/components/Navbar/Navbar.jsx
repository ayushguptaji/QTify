import React from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import Logo from "./Logo";
import CustomButton from "../Custom Components/CustomButton";
import logo from "../../assets/QTifyLogo.png";
import searchLogo from "../../assets/SearchIcon.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <Box className="header">
        <Logo link={logo} />
        <TextField
          className="search search-desktop"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Logo link={searchLogo} />
              </InputAdornment>
            ),
          }}
          placeholder="Search a song of your choice"
          name="search"
        />
        <CustomButton text="Give Feedback" />
      </Box>
    </>
  );
};

export default Navbar;
