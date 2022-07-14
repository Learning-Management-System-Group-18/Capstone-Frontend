import React from "react";

const About = ({ mentors, tools, data }) => {
  const handleDownloadLink = (link) => {
    window.location.replace(link);
  };

  return (
    <>
      {/* MENTOR */}
      <div className="mt-5">
        <div className="heading_5_user mb-3">Mentor</div>
        <div className="row">
          {mentors?.map((mentor, i) => (
            <>
              <div className="col-6 mb-3">
                <div className="d-flex gap-3 align-items-center" key={i}>
                  <img
                    src={mentor.url_image}
                    alt="mentor"
                    className="img-mentor"
                  />
                  <div className="d-flex flex-column">
                    <div className="subtitle_2_user">{mentor.name}</div>
                    <div
                      className="subtitle_2_user "
                      style={{ color: "rgba(0, 0, 0, 0.5)" }}
                    >
                      {`Mentor of ${data?.title}`}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* MENTOR */}

      {/* DESC */}
      <div className="mt-5">
        <div className="heading_5_user mb-3">Deskripsi</div>
        <div
          className="caption_1_user"
          style={{ color: "rgba(86, 95, 103, 1)" }}
        >
          {data?.description}
        </div>
      </div>

      {/* DESC */}

      {/* Tool */}
      <div className="mt-5">
        <div className="heading_5_user mb-3">Tool</div>
        <div className="row">
          {tools?.map((tool, i) => (
            <>
              <div className="col-4">
                <div className="d-flex tool gap-2 align-items-center" key={i}>
                  <img src={tool.url_image} alt="tool" className="tool-img" />
                  <div className="d-flex flex-column">
                    <div className="caption_1">{tool.name}</div>
                    <div
                      className="caption_2 underline"
                      onClick={() => handleDownloadLink(tool.link)}
                    >
                      Link Download
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* Tool */}
    </>
  );
};

export default About;
