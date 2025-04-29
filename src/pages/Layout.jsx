import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <main className="mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;