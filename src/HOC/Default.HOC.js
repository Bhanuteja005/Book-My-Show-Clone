import React from "react";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ children }) => {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  );
}

export default DefaultHOC;