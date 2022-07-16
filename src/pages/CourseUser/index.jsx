import React, { useState, useEffect } from "react";
import SideBar from "./courseSideBar";
import ContentShow from "./contentShow";
import { NavbarUser } from "../../components";
import axiosInstance from "../../networks/apis";
import { useParams } from "react-router-dom";

function Index() {
  const { idCourse } = useParams();
  const [title, setTitle] = useState();
  const [section, setSection] = useState([]);
  const [currentContent, setCurrentContent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const courseTitle = await axiosInstance.get("/api/course", {
        params: { id: idCourse },
      });
      setTitle(courseTitle.data.data.title);

      const section = await axiosInstance.get(
        `/api/sections?courseId=${idCourse}`
      );
      setSection(section.data.data);
    };
    fetchData();
  }, []);

  const watchContent = (data, type) => {
    const newData = [data, type];

    setCurrentContent(newData);
  };
  return (
    <div style={{ backgroundColor: "rgb(245,248,251)" }}>
      <NavbarUser />
      <SideBar title={title} section={section} watchContent={watchContent} />
      <ContentShow currentContent={currentContent} />
    </div>
  );
}

export default Index;
