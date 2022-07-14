import React from "react";
import "./style.css";
import { IoIosArrowUp } from "react-icons/io";
import { BiRadioCircle } from "react-icons/bi";
import { useEffect } from "react";
import { fbIcon, igIcon, twitterIcon, linkedIcon } from "../../assets";

const Index = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <footer className="">
        <div className="bg-footer container-fluid">
          <div className="row">
            <div className="col-md-6 titlefooteruser">
              Oncourse <BiRadioCircle className="circle-oncourefooter" />
              <p className="contentuser1">
                Oncourse adalah website online course yang menyediakan video
                pembelajaran yang dapat diakses dimana saja dan kapan saja
                dengan biaya yang terjangkau. Terdapat 8 kagori dalam bidang
                inovasi digital yang meningkatkan pemahaman mahasiswa dan
                fresgraduate terkait ilmu digital yang tengah dipelajari.
                Terdapat 2453 member yang sudah terdaftar di Oncourse dan 1234
                yang sudah menyelesaikan coursenya.
              </p>
            </div>
            <div className="col-md-1 titlefooteruser">
              Service
              <ul className="list-unstyled contentuser2 ">
                <li>About Us</li>
                <li>Online Course</li>
                <li>Class</li>
                <li>Event</li>
                <li>Help Center</li>
              </ul>
            </div>
            <div className="col-md-1 titlefooteruser">
              Company
              <ul className="list-unstyled contentuser2 ">
                <li>About</li>
                <li>Contact</li>
                <li>Responsibility</li>
                <li>Carrer</li>
                <li>Social Media</li>
              </ul>
            </div>
            <div className="col-md-1 titlefooteruser">
              Term
              <ul className="list-unstyled contentuser2 ">
                <li>Term &</li>
                <li>Condition</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div className="col-md-1 titlefooteruser">
              Course
              <ul className="list-unstyled contentuser2 ">
                <li>Andorid & Web Developer</li>
                <li>UI/UX Designer</li>
                <li>Bussiness</li>
                <li>Finance & Accounting</li>
                <li>Data Analyst</li>
                <li>Marketing</li>
                <li>Career Prepation</li>
              </ul>
            </div>
          </div>
          <div className="icon-sosmedFooterUser">
            <img src={igIcon} className="iconIg" />
            <img src={linkedIcon} className="iconLinked" />
            <img src={fbIcon} className="iconFb" />
            <img src={twitterIcon} className="iconTwitter" />
          </div>
          <div className="footeruser-copyright">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()}Courses.com - All Right Reserved
            </p>
          </div>
        </div>

        <div
          className="up-icon"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <IoIosArrowUp className="icon-userdropup" />
        </div>
      </footer>
    </>
  );
};

export default Index;
