import React from "react";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ children }) => {
  return (
    <DefaultLayout>
      {children} {/* Render the children prop here */}
    </DefaultLayout>
  );
}

export default DefaultHOC;