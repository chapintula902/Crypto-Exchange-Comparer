import React from "react";

const Layout = (props) => {
  return (
    <div
      className="layoutContainer"
      style={{
        backgroundImage: `url("/images/filler.png")`,
        backgroundRepeat: "repeat",
        width: "100%",
        overflowX: "none",
        height: "100%",
      }}
    >
      {props.children}
    </div>
  );
};

export default Layout;
