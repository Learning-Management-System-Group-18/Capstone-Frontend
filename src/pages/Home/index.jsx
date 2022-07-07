import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import {
  FooterUser,
  CardReview,
  ClassCategory,
  PopularClassCard,
} from "../../components";
import NavBarLandingPage from "./NavBarLandingPage";
import SearchLanding from "./searchLanding";
import FAQ from "./FrequentlyAskQuestion";
import "./style.css";
import { LandingPagePhoto } from "../../assets";

function Index() {
  const navigate = useNavigate();
  const myClassData = [
    {
      status: "ongoing",
      imgCourse:
        "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      titleCourse: "Social Media Marketing",
      categoryCourse: "Business Development",
      description: "Description...",
      totalSection: 156,
      isCompleted: 70,
      level: "Intermediate",
    },
    {
      status: "ongoing",
      imgCourse:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      titleCourse: "Social Media Marketing",
      categoryCourse: "Business Development",
      description: "Description...",
      totalSection: 156,
      isCompleted: 70,
      level: "Intermediate",
    },
  ];

  const classCategoryData = [
    {
      title: "Business Development",
      icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
    },
    {
      title: "Android Development",
      icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
    },
    {
      title: "Web Development",
      icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
    },
    {
      title: "Business Development",
      icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
    },
    {
      title: "Android Development",
      icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
    },
    {
      title: "Web Development",
      icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
    },
    {
      title: "Web Development",
      icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
    },
  ];

  const popularClassData = [
    {
      class_category: "Business Development",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Social Media Marketing",
      price: 0,
      level: "Intermediate",
      total_employee: 120,
      star: 3,
      total_review: 110,
    },
    {
      class_category: "Android Development",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Android Dev",
      price: 0,
      level: "Beginner",
      total_employee: 150,
      star: 4,
      total_review: 120,
    },
    {
      class_category: "Business Development",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Social Media Marketing",
      price: 0,
      level: "Advanced",
      total_employee: 120,
      star: 3,
      total_review: 110,
    },
    {
      class_category: "Android Development",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Android Dev",
      price: 0,
      level: "Beginner",
      total_employee: 150,
      star: 4,
      total_review: 120,
    },
    {
      class_category: "Business Development",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Social Media Marketing",
      price: 0,
      level: "Intermediate",
      total_employee: 120,
      star: 3,
      total_review: 110,
    },
    {
      class_category: "Android Development",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Android Dev",
      price: 0,
      level: "Beginner",
      total_employee: 150,
      star: 4,
      total_review: 120,
    },
    {
      class_category: "Business Development",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Social Media Marketing",
      price: 0,
      level: "Intermediate",
      total_employee: 120,
      star: 3,
      total_review: 110,
    },
    {
      class_category: "Android Development",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Android Dev",
      price: 0,
      level: "Beginner",
      total_employee: 150,
      star: 4,
      total_review: 120,
    },
    {
      class_category: "Android Development",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Android Dev",
      price: 0,
      level: "Beginner",
      total_employee: 150,
      star: 4,
      total_review: 120,
    },
  ];

  const mentorData = [
    {
      mentor_name: "John Doe",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bio: "Head of office",
    },
    {
      mentor_name: "Linka Angel",
      img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bio: "Head of Developer",
    },
    {
      mentor_name: "Prisce",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bio: "Head of Marketing",
    },
    {
      mentor_name: "John Doe",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bio: "Head of office",
    },
    {
      mentor_name: "Linka Angel",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bio: "Head of Developer",
    },
    {
      mentor_name: "Prisce",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bio: "Head of Marketing",
    },
    {
      mentor_name: "John Doe",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bio: "Head of office",
    },
    {
      mentor_name: "Linka Angel",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bio: "Head of Developer",
    },
    {
      mentor_name: "Prisce",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bio: "Head of Marketing",
    },
  ];

  const reviewData = [
    {
      quotes_desc:
        "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
      reviewer_profile: {
        img_reviewer: "https://i.pravatar.cc/300",
        reviewer_name: "ani",
        reviewer_job: "Frontend Developer",
      },
    },
    {
      quotes_desc:
        "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
      reviewer_profile: {
        img_reviewer: "https://i.pravatar.cc/400",
        reviewer_name: "Rizky",
        reviewer_job: "Backend Developer",
      },
    },
    {
      quotes_desc:
        "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
      reviewer_profile: {
        img_reviewer: "https://i.pravatar.cc/500",
        reviewer_name: "Nopal",
        reviewer_job: "Backend Developer",
      },
    },
    {
      quotes_desc:
        "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
      reviewer_profile: {
        img_reviewer: "https://i.pravatar.cc/400",
        reviewer_name: "Rizky",
        reviewer_job: "Backend Developer",
      },
    },
    {
      quotes_desc:
        "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
      reviewer_profile: {
        img_reviewer: "https://i.pravatar.cc/500",
        reviewer_name: "Nopal",
        reviewer_job: "Backend Developer",
      },
    },
  ];
  return (
    <div>
      <NavBarLandingPage />
      <div className="container">
        <Row>
          <Col style={{ marginTop: "14rem" }} xs={6}>
            <span className="tittle"> Improve Yourself for Better Future</span>
            <br />
            <span className="subtittle">
              Finding your passion, grow up your skill in your own space to get
              a better life
            </span>
            <SearchLanding />
          </Col>
          <Col xs={6}>
            <img
              src={LandingPagePhoto}
              alt=""
              style={{ width: "500px" }}
              className="mt-5 ms-5"
            />
          </Col>
        </Row>
      </div>
      <ClassCategory title={"Class Category"} cardData={classCategoryData} />
      <PopularClassCard data={popularClassData} />

      <FAQ />
      <CardReview data={reviewData} />
      <div className="started">
        <div style={{ padding: "58px 87.5px 58px 87.5px" }} className="d-flex ">
          <div>
            <span className="tittle-started">
              Are you ready to start your course now!
            </span>
            <br />
            <span className="sub-tittle-started">
              If you have any question feel free to contact us anytime, we will
              get back to you as soon as we can
            </span>
          </div>
          <div className="ms-5">
            <button
              className="get-started-button"
              onClick={() => {
                navigate("/register");
              }}
            >
              GetStarted
            </button>
          </div>
          <div>
            <button className="contact-us-button">ContactUs</button>
          </div>
        </div>
      </div>
      <FooterUser />
    </div>
  );
}

export default Index;
