import React from "react";
import { BsBellFill } from "react-icons/bs";
import { BiRadioCircle } from "react-icons/bi";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown, MenuItem } from "react-bootstrap";
import "./style.css";

const Index = () => {
  let i = [1, 2, 3, 2, 3, 2, 1, 2, 3, 2, 3, 2, 2, 1, 2, 2];
  return (
    <div>
      <Dropdown as={ButtonGroup} align={"end"}>
        <Dropdown.Toggle id="dropdown-custom-1" className="notification">
          <BsBellFill className="icon-notif" />
          <BiRadioCircle className="circle-notif" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="mt-2 scroll">
          <div className="d-flex align-items-center justify-content-between">
            <Dropdown.Header className="body_2 neutral_3">
              Notification
            </Dropdown.Header>
            <Dropdown.Header className="neutral_3 header-mark">
              Mark as Read
            </Dropdown.Header>
          </div>

          {i.map(() => (
            <Dropdown.Item className="notif-content py-2">
              <div className="d-flex align-items-center">
                <BiRadioCircle className="circle-read" />
                <div className="caption_1 neutral_3">
                  New employee in{" "}
                  <span className="body_2">social media marketing</span>. <br />
                  Please check your order.
                </div>
              </div>
              <div className="caption_2 neutral_2 date">Today, 10.30</div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Index;
