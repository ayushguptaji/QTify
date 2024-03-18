import React from "react";
import HeroSection from "./Hero Section/HeroSection";
import Navbar from "./Navbar/Navbar";
import "./HomePage.css";
import heroLogo from "../assets/headphone.png";
import Section from "./Section/Section";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        text1="100 Thousand Songs, ad-free"
        text2="Over thousands podcast episodes"
        url={heroLogo}
      />
      <Section
        title="Top Albums"
        apiURL="https://qtify-backend-labs.crio.do/albums/top"
      />
      <Section
        title="New Albums"
        apiURL="https://qtify-backend-labs.crio.do/albums/new"
      />
      <Section
        title="Songs"
        apiURL="https://qtify-backend-labs.crio.do/songs"
        isSongsSection
      />
    </>
  );
};

export default HomePage;
