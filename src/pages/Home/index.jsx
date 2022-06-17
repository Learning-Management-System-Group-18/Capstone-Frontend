import React from "react";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Halo silahkan Login !!!!</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Index;
