import React from "react";
import "./style.css";
import { ProgressBar } from "react-bootstrap";

const Index = () => {
  return (
    <>
      <div className="wrap">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center">
            <div className="circle">1</div>
            <div className="progres-info">Course Information</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="circle">2</div>
            <div className="progres-info">Attachment File</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="circle">3</div>
            <div className="progres-info">Create Section</div>
          </div>
        </div>
        <ProgressBar style={{ height: "2px", width: "75%" }}>
          <ProgressBar now={100} variant="success" style={{ width: "50%" }} />
          <ProgressBar now={100} variant="success" style={{ width: "50%" }} />
        </ProgressBar>
      </div>
    </>
  );
};

export default Index;
