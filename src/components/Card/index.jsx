import React from "react";
import "./style.css";

const Index = ({ icon, total, desc }) => {
  return (
    <div className="card">
      <img src={icon} className="img" alt="icon" />
      <div className="wrap">
        <div className="total">{total}</div>
        <div className="desc">{desc}</div>
      </div>
    </div>
  );
};

export default Index;
