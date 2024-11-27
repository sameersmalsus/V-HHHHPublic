import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SliderForCareers from "./SliderForCareers";

export default function CareersContent() {
  const [jobs, setJobs] = useState([]);
  const [members, setMembers] = useState([]);
  const [benefits, setBenifits] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://argosmob.uk/api-random/get-open-positions.php")
      .then((response) => {
        if (response?.data?.success) {
          setJobs(response?.data?.data);
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching the navigation data:", error);
      });
    axios
      .get("https://argosmob.uk/api-random/get-meet-our-team.php")
      .then((response) => {
        if (response?.data?.success) {
          setMembers(response?.data?.data);
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching the navigation data:", error);
      });
    axios
      .get("https://argosmob.uk/api-random/get-benifites.php")
      .then((response) => {
        if (response?.data?.success) {
          setBenifits(response?.data?.data);
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching the navigation data:", error);
      });
    
  }, []);
  return (
    <section id="content">
      <div
        className="wave-bottom"
        style={{
          position: "absolute",
          top: "-12px",
          left: 0,
          width: "100%",
          backgroundImage: "url('images/wave2.svg')",
          height: "12px",
          zIndex: 2,
          backgroundRepeat: "repeat-x",
          transform: "rotate(180deg)",
        }}
      ></div>
      <div className="content-wrap py-0">
        <section
          id="section-team"
          className="page-section section bg-transparent m-0"
        >
          <div className="container clearfix">
            <div className="heading-block center">
              <h2>Meet our Team</h2>
            </div>
            <div className="row justify-content-center col-mb-50 mb-0 mt-6">
              {members.map((member, index) => (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4 d-flex">
                  <div className="founder-box  d-flex flex-column">
                    <div className="founder-upper-box text-center">
                      <img src="images/New_candidate.svg" alt="" />
                    </div>
                    <div className="founder-description">
                      <h3 className="founder-title">{member.Title}</h3>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: member.ShortDescription,
                        }}
                      ></div>
                    </div>
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: member.Description,
                      }}
                    >
                    </div>
                     <div className="mt-3">
                     {members.length - 1 === index ? (
                        <div className="text-end founder-check-position-btn">
                          <Link to="/careers#section-positions">
                            Check Open Positions
                          </Link>
                        </div>
                      ) : (
                        ""
                      )}
                     </div>

                  </div>
                </div>
              ))}
             
            </div>
          </div>
        </section>
        <section
          id="section-benefits"
          className="page-section section m-0 pt-0 bg-transparent"
        >
          <div className="vertical-middle">
            <div className="container clearfix">
              <div className="heading-block center">
                <h2>Benefits</h2>
              </div>
              <div className="row col-mb-50">
                <div className="col-sm-12 col-md-4 col-lg-5">
                  <div className="benefit-img1">
                    <img src="images/benefit-img1.png" alt="" />
                  </div>
                  <div className="benefit-img1 upper-benefit-img">
                    <img src="images/benefit-img2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-7">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <h4 className="fw-semibold">{benefit.Title}</h4>
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: benefit.Description,
                      }}
                    >
                    </div>
                  </div>
                ))}
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        <SliderForCareers />
        <section
          id="section-positions"
          className="page-section section bg-transparent m-0"
        >
          <div className="vertical-middle">
            <div className="container clearfix">
              <div className="heading-block center bottommargin-lg">
                <h2>Open positions</h2>
                <span>
                  Check out the current vacancies. We also welcome initiative
                  applications to{" "}
                  <a href="mailto:recruiting@hochhuth-consulting.de">
                    recruiting@hochhuth-consulting.de
                  </a>
                </span>
              </div>
              <div className="clearfix">
                <div className="row col-mb-50 mb-0">
                  {jobs.map((job, index) => (
                    <div
                      key={index}
                      className="col-sm-12 col-md-6 col-lg-6 d-flex"
                    >
                      <div className="card-box d-flex flex-column">
                        <div className="card-box-body">
                          <div className="card-box-title">
                            <h3>{job?.Title}</h3>
                          </div>
                          <div
                            className="card-box-desc"
                            
                            dangerouslySetInnerHTML={{
                              __html: job?.ShortDescription,
                            }}
                          ></div>
                          
                          {/* {job?.ShortDescription} */}
                        </div>
                        <div className="card-box-actionBtn">
                          <Link
                            to="/Junior-Digital-Governance-Specialist"
                            className="button button-border button-rounded button-fill fill-from-right button-blue"
                          >
                            <span>READ MORE</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
