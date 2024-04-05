import React from "react";

//components
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import Navbar from "../components/navbar/navbar.component";
const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    <HeroCarousal />
    {props.children}
    </>
    
  );
};

export default  DefaultLayout;