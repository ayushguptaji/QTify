import React from "react";
import { Box } from "@mui/material";
import './HeroSection.css'

const HeroSection = ({ text1, text2, url }) => {
  return (
    <Box className="hero">
      <div className="hero-heading">
        {text1} <br/> {text2}
      </div>
      <img src={url} alt="heroImage" />
    </Box>
  );
};

export default HeroSection;
