import React from "react";

//components
import Navbar from "../components/navbar/navbar.component";
const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    {props.children}
    </>
    
  );
}

export default  DefaultLayout;