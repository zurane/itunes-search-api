import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import Tabs from "../components/Tabs"; // Import the Tabs component

function FavoritesPage() {

  return (
    <>
      <Tabs />
      <Outlet />
    </>
  );
}

export default FavoritesPage;
