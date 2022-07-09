import React from "react";
import SideBar from "./courseSideBar";
import ContentShow from "./contentShow";
import { NavbarUser } from "../../components";

function Index() {
  return (
    <div style={{ backgroundColor: "rgb(245,248,251)" }}>
      <NavbarUser />
      <SideBar />
      <ContentShow />
    </div>
  );
}

export default Index;
