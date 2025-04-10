import React from "react";
import Navigation from "./Navigation";

function Layout({ children, handleLogout }) {
  return (
    <div className="app-container">
      <Navigation handleLogout={handleLogout} />
      <main className="main-content">{children}</main>
    </div>
  );
}

export default Layout;