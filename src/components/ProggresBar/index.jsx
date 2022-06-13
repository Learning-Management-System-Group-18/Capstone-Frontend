import React from "react";
import "./style.css";
import { ProgressBar } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";

const Index = ({ proggres }) => {
  let proggres1, proggres2, proggres3;
  let variant1, variant2;

  if (proggres == 1) {
    proggres1 = "bg-success";
    proggres2 = "";
    proggres3 = "";
    variant1 = "secondary";
    variant2 = "secondary";
  } else if (proggres == 2) {
    proggres1 = "bg-success";
    proggres2 = "bg-success";
    proggres3 = "";
    variant1 = "success";
    variant2 = "secondary";
  } else if (proggres == 3) {
    proggres1 = "bg-success";
    proggres2 = "bg-success";
    proggres3 = "bg-success";
    variant1 = "success";
    variant2 = "success";
  }

  return (
    <>
      <div className="wrap">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center">
            <div className={proggres1 + ` circle`}>
              {proggres == 2 || proggres == 3 ? <AiOutlineCheck /> : "1"}
            </div>
            <div className="progres-info">Course Information</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className={proggres2 + ` circle`}>
              {proggres == 3 ? <AiOutlineCheck /> : "2"}
            </div>
            <div className="progres-info">Attachment File</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className={proggres3 + ` circle`}>3</div>
            <div className="progres-info">Create Section</div>
          </div>
        </div>
        <ProgressBar>
          <ProgressBar now={100} variant={variant1} />
          <ProgressBar now={100} variant={variant2} />
        </ProgressBar>
      </div>
    </>
  );
};

export default Index;
