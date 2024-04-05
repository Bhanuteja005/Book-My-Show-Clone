import React from "react";
import DefaultLayout from "../layouts/Default.layout";
import Home from "../pages/Home.page";
const DefaultHOC = ({ children }) => {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
}

export default DefaultHOC;