import React from "react";
import "./style.css";
import { ProgressBar } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";

const Index = ({ proggres }) => {
  let proggres1, proggres2;
  let variant1;

  if (proggres == 1) {
    proggres1 = "bg-success";
    proggres2 = "";
    variant1 = "secondary";
  } else if (proggres == 2) {
    proggres1 = "bg-success";
    proggres2 = "bg-success";
    variant1 = "success";
  }

  return (
    <>
      <div className="container col-3">
        <div className="wrap-progress">
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column align-items-center">
              <div className={proggres1 + ` circle`}>
                {proggres == 2 ? <AiOutlineCheck /> : "1"}
              </div>
              <div className="progress-info">Course Information</div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className={proggres2 + ` circle`}>
                {proggres == 3 ? <AiOutlineCheck /> : "2"}
              </div>
              <div className="progress-info">Attachment File</div>
            </div>
          </div>
          <ProgressBar>
            <ProgressBar now={100} variant={variant1} />
          </ProgressBar>
        </div>
      </div>
    </>
  );
};

export default Index;
