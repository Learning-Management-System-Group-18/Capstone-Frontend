import React from "react";
import { useNavigate } from "react-router-dom";
import { MyCourse } from "../../components";

function Index() {
  const navigate = useNavigate();
  return (
    <div style={{ background: "#F5F8FB", height: "100vh" }}>
      <h1>Halo silahkan Login !!!!</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>

      {/* <MyCourse /> */}
    </div>
  );
}

export default Index;
