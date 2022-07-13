import { React, useState } from 'react';
import './style.css';
import { NavbarUser, MyCourse } from '../../components';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Index = () => {
  const [tabs, setTabs] = useState('ongoing');
  console.log(tabs);

  return (
    <div className="bg-mainMyClass">
      <NavbarUser />

      {/* Tabs */}
      <div className="row nav-userMyClass">
        <div className="col-4 d-flex gap-5 mt-4 ms-4 ">
          <div
            className={
              tabs === `ongoing`
                ? `myclass-Ongoing-btn textdecor-MyClass`
                : `myclass-Ongoing-btn`
            }
            onClick={() => setTabs('ongoing')}
            style={{ cursor: 'pointer' }}
          >
            Ongoing
          </div>
          <div
            className={
              tabs === `completed`
                ? `myclass-Completed-btn textdecor-MyClass`
                : `myclass-Completed-btn`
            }
            onClick={() => setTabs('completed')}
            style={{ cursor: 'pointer' }}
          >
            Completed
          </div>
        </div>
        {/* Tabs */}

        {/* Dropdown Item */}
        <div className="col-7 d-flex justify-content-end mt-3">
          <DropdownButton
            id="dropdown-basic-button"
            title="Filter by category"
            className="filterClassCategory"
          >
            <Dropdown.Item>Web & Mobile Developer</Dropdown.Item>
            <Dropdown.Item>UI/UX Designer</Dropdown.Item>
            <Dropdown.Item>Business Development</Dropdown.Item>
            <Dropdown.Item>Finance & Accounting</Dropdown.Item>
            <Dropdown.Item>Data Analyst</Dropdown.Item>
            <Dropdown.Item>Marketing</Dropdown.Item>
            <Dropdown.Item>Career Preparation</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      {/* Dropdown Item */}

      {/* Tabs Decoration Bottom */}
      <div className="row tabs-Myclass">
        <div className="col-6 mt-2">
          <div className="d-flex">
            <div
              className={`${
                tabs === 'ongoing' ? `bottom-brdrMyClassOngoing` : ``
              }`}
            ></div>

            <div
              className={`${
                tabs === 'completed' ? `bottom-brdrMyClassCompleted` : ` `
              }`}
            ></div>
          </div>
        </div>
      </div>
      {/* Tabs Decoration Bottom */}

      {/* <- Start Content Page My Class Ongoing -> */}
      <div className={`${tabs === 'ongoing' ? `` : `d-none`}`}>
        <div className="heading_2_user mt-5 ms-5">Ongoing Course</div>
        <div className="body_1_user mt-1 ms-5">
          Let’s continue your enrolled course to improve your skill
        </div>
        <div className="row d-flex contentmyclass-Ongoing ">
          <div className="col-6">
            <MyCourse
              status={'ongoing'}
              imgCourse={
                'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              }
              titleCourse={'Social Media Marketing'}
              categoryCourse={'Business Development'}
              totalSection={156}
              isCompleted={70}
              level={'Intermediate'}
            />
          </div>
          <div className="col-6">
            <MyCourse
              status={'ongoing'}
              imgCourse={
                'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              }
              titleCourse={'Social Media Marketing'}
              categoryCourse={'Business Development'}
              totalSection={156}
              isCompleted={70}
              level={'Intermediate'}
            />
          </div>
        </div>
      </div>
      {/* <- Start Content Page My Class Ongoing -> */}

      {/* <- Start Content Page My Class Completed -> */}
      <div className={`${tabs === 'completed' ? `` : `d-none`}`}>
        <div className="heading_2_user mt-5 ms-5">Completed Course</div>
        <div className="body_1_user mt-1 ms-5">
          Congratulation for finish your course, you can download your
          certificate here and don’t forget to give a reivew.
        </div>
        <div className="row d-flex contentmyclass-Completed ">
          <div className="col-6">
            <MyCourse
              status={'completed'}
              imgCourse={
                'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              }
              titleCourse={'Social Media Marketing'}
              categoryCourse={'Business Development'}
              description={'Description...'}
              totalSection={156}
              isCompleted={156}
              level={'Intermediate'}
            />
          </div>
          <div className="col-6">
            <MyCourse
              status={'completed'}
              imgCourse={
                'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              }
              titleCourse={'Social Media Marketing'}
              categoryCourse={'Business Development'}
              description={'Description...'}
              totalSection={156}
              isCompleted={156}
              level={'Intermediate'}
            />
          </div>
        </div>
      </div>
      {/* <- End Content Page My Class Completed  -> */}
    </div>
  );
};

export default Index;
