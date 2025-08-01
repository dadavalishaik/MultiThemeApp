import React from "react";
import Navbar from "./Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <main
        style={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
