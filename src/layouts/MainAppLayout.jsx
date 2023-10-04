import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Actionsbar from "../components/Actionsbar/Actionsbar";
import { Outlet } from "react-router-dom";

function MainAppLayout() {
  return (
    <div>
      <Navbar />
      <Actionsbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainAppLayout;
