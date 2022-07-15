import React, { useState, useEffect } from "react";
import axiosInstance from "../../networks/apis";
import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CardReview,
  ClassCategory,
  FooterUser,
  MyCourse,
  NavbarUser,
  PopularClassCard,
} from "../../components";
import { bannerJoinOurCommunity } from "../../assets";

const Index = () => {
  const navigate = useNavigate();
  const [mentorData, setMentorData] = useState([]);
  const [reviewData, setReviewData] = useState([]);

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

  //   const classCategoryData = [
  //     {
  //       title: "Business Development",
  //       icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
  //     },
  //     {
  //       title: "Android Development",
  //       icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
  //     },
  //     {
  //       title: "Web Development",
  //       icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
  //     },
  //     {
  //       title: "Business Development",
  //       icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
  //     },
  //     {
  //       title: "Android Development",
  //       icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
  //     },
  //     {
  //       title: "Web Development",
  //       icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
  //     },
  //     {
  //       title: "Web Development",
  //       icon: "https://icon-library.com/images/android-icon/android-icon-5.jpg",
  //     },
  //   ];

  //   const popularClassData = [
  //     {
  //       class_category: "Business Development",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       title: "Social Media Marketing",
  //       price: 0,
  //       level: "Intermediate",
  //       total_employee: 120,
  //       star: 3,
  //       total_review: 110,
  //     },
  //     {
  //       class_category: "Android Development",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       title: "Android Dev",
  //       price: 0,
  //       level: "Beginner",
  //       total_employee: 150,
  //       star: 4,
  //       total_review: 120,
  //     },
  //     {
  //       class_category: "Business Development",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       title: "Social Media Marketing",
  //       price: 0,
  //       level: "Advanced",
  //       total_employee: 120,
  //       star: 3,
  //       total_review: 110,
  //     },
  //     {
  //       class_category: "Android Development",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       title: "Android Dev",
  //       price: 0,
  //       level: "Beginner",
  //       total_employee: 150,
  //       star: 4,
  //       total_review: 120,
  //     },
  //     {
  //       class_category: "Business Development",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       title: "Social Media Marketing",
  //       price: 0,
  //       level: "Intermediate",
  //       total_employee: 120,
  //       star: 3,
  //       total_review: 110,
  //     },
  //     {
  //       class_category: "Android Development",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       title: "Android Dev",
  //       price: 0,
  //       level: "Beginner",
  //       total_employee: 150,
  //       star: 4,
  //       total_review: 120,
  //     },
  //     {
  //       class_category: "Business Development",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       title: "Social Media Marketing",
  //       price: 0,
  //       level: "Intermediate",
  //       total_employee: 120,
  //       star: 3,
  //       total_review: 110,
  //     },
  //     {
  //       class_category: "Android Development",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       title: "Android Dev",
  //       price: 0,
  //       level: "Beginner",
  //       total_employee: 150,
  //       star: 4,
  //       total_review: 120,
  //     },
  //     {
  //       class_category: "Android Development",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       title: "Android Dev",
  //       price: 0,
  //       level: "Beginner",
  //       total_employee: 150,
  //       star: 4,
  //       total_review: 120,
  //     },
  //   ];

  //   const mentorData = [
  //     {
  //       mentor_name: "John Doe",
  //       img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       bio: "Head of office",
  //     },
  //     {
  //       mentor_name: "Linka Angel",
  //       img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       bio: "Head of Developer",
  //     },
  //     {
  //       mentor_name: "Prisce",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       bio: "Head of Marketing",
  //     },
  //     {
  //       mentor_name: "John Doe",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       bio: "Head of office",
  //     },
  //     {
  //       mentor_name: "Linka Angel",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       bio: "Head of Developer",
  //     },
  //     {
  //       mentor_name: "Prisce",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       bio: "Head of Marketing",
  //     },
  //     {
  //       mentor_name: "John Doe",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       bio: "Head of office",
  //     },
  //     {
  //       mentor_name: "Linka Angel",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       bio: "Head of Developer",
  //     },
  //     {
  //       mentor_name: "Prisce",
  //       img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       bio: "Head of Marketing",
  //     },
  //   ];

  //   const reviewData = [
  //     {
  //       quotes_desc:
  //         "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
  //       reviewer_profile: {
  //         img_reviewer: "https://i.pravatar.cc/300",
  //         reviewer_name: "ani",
  //         reviewer_job: "Frontend Developer",
  //       },
  //     },
  //     {
  //       quotes_desc:
  //         "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
  //       reviewer_profile: {
  //         img_reviewer: "https://i.pravatar.cc/400",
  //         reviewer_name: "Rizky",
  //         reviewer_job: "Backend Developer",
  //       },
  //     },
  //     {
  //       quotes_desc:
  //         "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
  //       reviewer_profile: {
  //         img_reviewer: "https://i.pravatar.cc/500",
  //         reviewer_name: "Nopal",
  //         reviewer_job: "Backend Developer",
  //       },
  //     },
  //     {
  //       quotes_desc:
  //         "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
  //       reviewer_profile: {
  //         img_reviewer: "https://i.pravatar.cc/400",
  //         reviewer_name: "Rizky",
  //         reviewer_job: "Backend Developer",
  //       },
  //     },
  //     {
  //       quotes_desc:
  //         "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
  //       reviewer_profile: {
  //         img_reviewer: "https://i.pravatar.cc/500",
  //         reviewer_name: "Nopal",
  //         reviewer_job: "Backend Developer",
  //       },
  //     },
  //   ];

  const dataCategory = [];
  const [itemCategory, setItemCategory] = useState([]);
  const [popularCourse, setPopularCourse] = useState([]);

  const handleSeeAllClass = () => {
    navigate("/my-class");
  };

  useEffect(() => {
    axiosInstance
      .get("api/mentor/top")
      .then((response) => {
        console.log("top ", response.data.data);
        setMentorData(...mentorData, response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axiosInstance
      .get("api/reviews")
      .then((response) => {
        console.log("review ", response.data.data);
        setReviewData(...reviewData, response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // if (user.length !== 0) {
    axiosInstance
      .get("/api/categories?page=0&size=7")
      .then((response) => {
        console.log(response.data.data);
        setItemCategory(...itemCategory, response.data.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
        //   setErrorMassage({
        //     ...errorMassage,
        //     email: "Email Salah",
        //     password: "Password Salah",
        //     warna: "red",
        //   });
        //   setUser(userLogin);
      });
    // }
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/course/popular")
      .then((response) => {
        console.log(response.data.data);
        setPopularCourse(...popularCourse, response.data.data);
        // console.log(popularCourse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(popularCourse);
  console.log(itemCategory);

  return (
    <>
      <NavbarUser />
      <div className="card_mycourse">
        <div className="d-flex justify-content-between mb-3">
          <h3 className="heading_2">Let’s Continue to Improve Your Skills</h3>
          <p
            onClick={handleSeeAllClass}
            className="see_all subtitle_1 secondary_1"
          >
            See all
          </p>
        </div>
        <div className="d-flex justify-content-between">
          {myClassData.map((item, index) => (
            <MyCourse
              status={item.status}
              imgCourse={item.imgCourse}
              titleCourse={item.titleCourse}
              categoryCourse={item.categoryCourse}
              description={item.description}
              totalSection={item.totalSection}
              isCompleted={item.isCompleted}
              level={item.level}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="card_class_category bg_neutral_1">
        {itemCategory === undefined ? (
          // <ClassCategory title={"Class Category"} cardData={classCategoryData} />
          ""
        ) : (
          <ClassCategory title={"Class Category"} cardData={itemCategory} />
        )}
      </div>
      <div className="py-5">
        <h3 className="text-center heading_2">Popular Class</h3>
        <p className="text-center body_1">
          This is 6 popular class in this week
        </p>
        {popularCourse === undefined ? (
          // <PopularClassCard data={popularClassData} />
          ""
        ) : (
          <PopularClassCard data={popularCourse} />
        )}
      </div>
      <div>
        <h3 className="heading_2 text-center">Join Our Community</h3>
        <div className="d-flex joc">
          <img
            className="banner_joc me-3"
            src={bannerJoinOurCommunity}
            alt="banner"
          />
          <div>
            <h5 className="heading_5">
              Join our cummunity to get more insight and grow together
            </h5>
            <p className="body_1 mb-5">
              This community provide platform for you to connect with other in
              this levelup course to gain more insight from each other, you can
              ask anything about course, career or job experience. Please click
              the button bellow.
            </p>
            <Button type={"btn-jointelegram"} />
          </div>
        </div>
      </div>
      <div>
        <h3 className="heading_2 text-center mb-5">Top Mentors</h3>
        <div className="card_mentor_container d-flex flex-nowrap">
          {mentorData?.map((item, index) => (
            <div className="card_mentor shadow-sm" key={index}>
              <div className="card_img">
                <img className="img_mentor" src={item.url_image} alt="mentor" />
              </div>
              <div className="data_mentor">
                <h5 className="body_3">{item.name}</h5>
                <p className="capion_2 neutral_2"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="review_container bg_neutral_1">
        <h3 className="heading_2">Reviews</h3>
        <CardReview data={reviewData || []} />
      </div>
      <div>
        <footer>
          <FooterUser />
        </footer>
      </div>
    </>
  );
};

export default Index;
