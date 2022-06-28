import React from "react";
import {
  Card,
  Button,
  Table,
  NavbarAdmin,
  SearchBar,
  Notification,
} from "../../components";
import {
  employIcon,
  categoriesIcon,
  courseIcon,
  arrowRightIcon,
  totalMentorIcon,
} from "../../assets";
import "./style.css";
import { useParams } from "react-router-dom";

const Index = () => {
  const { categoryName } = useParams();

  console.log(categoryName);

  const tableTitle = ["Course"];
  const tHead = ["Course Title", "Mentor", "Section", "Employee", ""];
  const data = [
    {
      title: "Android Developer",
      mentor: ["mentor 1", "mentor 2"],
      section: "12 Section",
      employee: "34 Employees",
      iconTitle:
        "https://img.icons8.com/ultraviolet/344/play-button-circled.png",
      mentorImg: [
        "https://akcdn.detik.net.id/visual/2016/08/31/46968e0b-a0db-4348-920b-94a64aad2efd_169.jpg?w=650",
        "https://akcdn.detik.net.id/visual/2016/08/31/46968e0b-a0db-4348-920b-94a64aad2efd_169.jpg?w=650",
      ],
    },
    {
      title: "Android Developer",
      mentor: ["mentor 1", "mentor 2"],
      section: "12 Section",
      employee: "34 Employees",
      iconTitle: "https://img.icons8.com/color/344/apple-app-store--v1.png",
      mentorImg: [
        "https://akcdn.detik.net.id/visual/2016/08/31/46968e0b-a0db-4348-920b-94a64aad2efd_169.jpg?w=650",
        "https://akcdn.detik.net.id/visual/2016/08/31/46968e0b-a0db-4348-920b-94a64aad2efd_169.jpg?w=650",
      ],
    },
  ];

  return (
    <>
      <NavbarAdmin />
      <div className="background">
        <div className="nav-info">
          <div className="container d-flex justify-content-between py-4">
            <div className="nav-name">
              <span className="align-middle caption_2">
                Dashboard <img src={arrowRightIcon} alt="arrow-right" />{" "}
                {categoryName}{" "}
              </span>
            </div>

            <div className="d-flex align-items-center gap-3">
              <SearchBar />
              <Notification />
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="d-flex mb-1">
            <h1 className="me-3 heading_4 secondary_2">{categoryName}</h1>
            <Button type={"btn-edit"} />
          </div>
          <p className="caption_1 neutral_3">
            Marketing adalah proses mengenalkan produk atau jasa agar diketahui
            oleh masyarakat. Marketing juga berarti proses pemasaran <br />{" "}
            produk atau jasa, mulai dari pembuatan strategi hingga apa yang
            dirasakan oleh konsumen.
          </p>
        </div>

        <div className="container d-flex gap-4 mt-4">
          <Card icon={courseIcon} total={14} desc={"Total of Course"} />
          <Card icon={totalMentorIcon} total={5} desc={"Total of Mentor"} />
          <Card icon={employIcon} total={121} desc={"Total of Employees"} />
        </div>

        <div className="container background-table px-5 pb-5 mt-4">
          <Table tHead={tHead} data={data} tableTitle={tableTitle} />
        </div>
      </div>
    </>
  );
};

export default Index;
