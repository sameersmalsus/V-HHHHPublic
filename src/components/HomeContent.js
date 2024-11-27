import React, { useEffect, useState } from 'react';
import HomePageSlider from './HomePageSlider';
import axios from 'axios';

const ReadMoreContent = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  const characterLimit = 200;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortContent = content.length > characterLimit ? content.slice(0, characterLimit) : content;

  useEffect(() => {
    if (content.length > characterLimit) {
      setShowReadMore(true);
    }
  }, [content]);

  return (
    <div className='text-justify'>
      <div
        dangerouslySetInnerHTML={{
          __html: isExpanded ? content : shortContent + (showReadMore ? '...' : '')
        }}
      />
      {showReadMore && (
        <span onClick={toggleReadMore} className="read-more-button btn-link" style={{cursor:"pointer"}}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
      )}
    </div>
  );
};

export default function HomeContent() {
  const [offers,setOffers]=useState([]);
  const [philosophy,setPhilosophy]=useState([]);
  const [weAre,setWeAre]=useState([]);
  useEffect(() => {
    axios
      .get("https://argosmob.uk/api-random/get-what-we-offer.php")
      .then((response) => {
        if (response?.data?.success) {
          setOffers(response?.data?.data);
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching the navigation data:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://argosmob.uk/api-random/getOurPhilosophy.php")
      .then((response) => {
        if (response?.data?.success) {
          setPhilosophy(response?.data?.data);
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching the navigation data:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://argosmob.uk/api-random/get-who-we-are.php")
      .then((response) => {
        if (response?.data?.success) {
          setWeAre(response?.data?.data);
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
        <div className="promo promo-light promo-full p-5">
          <div className="container clearfix">
            <div className="row align-items-center">
              <div className="col-12 col-lg-12 text-center text-uppercase">
                <h1>
                  We are <span>Hiring</span>! Join our team!
                </h1>
              </div>
              <div className="col-12 col-lg-12 text-center mt-3">
                <a
                  data-animate="fadeInUp"
                  href="/careers#section-positions"
                  className="button button-border button-rounded button-fill fill-from-right button-blue m-0"
                >
                  <span>EXPLORE VACANCIES</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section
          id="what-we-offer"
          className="page-section section bg-transparent"
        >
          <div className="vertical-middle">
            <div className="container clearfix">
              <div className="heading-block center">
                <h2>What We Offer</h2>
                <span>
                  We provide a wide range of Flexible & Useful Services.
                </span>
              </div>
              <div className="row col-mb-50">
                {offers.map((item, index) => (
                  <div key={index} className="col-sm-6 col-lg-4">
                    <div
                      className="feature-box fbox-plain"
                      data-animate="fadeIn"
                    >
                      <div className="fbox-icon">
                        <span className="fbox-text">0{index+1}</span>
                      </div>
                      <div className="fbox-content">
                        <h3>
                          <a href="h" target="_blank">
                            {item?.Title}
                          </a>
                        </h3>
                        <ReadMoreContent content={item?.Description} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-philosophy"
          className="page-section section bg-transparent m-0"
        >
          <div className="container clearfix">
            <div className="heading-block center">
              <h2>Our Philosophy</h2>
              <span>
                Introducing our work philosophy:
                <br />
                client-focused, agile, and holistic digital solutions
              </span>
            </div>
            <div className="row justify-content-center mb-0">
              <div className="col-md-8 bottommargin">
                <div className="border-bottom-0  text-justify bottommargin">
                   <div dangerouslySetInnerHTML={{ __html: philosophy?.Description }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <HomePageSlider />

        <section
          id="who-we-are"
          className="page-section section bg-transparent m-0"
        >
          <div className="container clearfix">
            <div className="heading-block center">
              <h2>WHO WE ARE</h2>
              <span>Everything you need to know about us</span>
            </div>
            <div className="row justify-content-center mb-0">
              <div className="col-md-8 bottommargin">
                <div className="border-bottom-0 text-justify bottommargin">
                   <div dangerouslySetInnerHTML={{ __html: weAre[0]?.Description }}/>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 topmargin pl-0 pr-0 pt-4">
                  <div className="founder-box">
                    <div className="founder-upper-box text-center">
                      <img src="images/stefan.jpg" alt="founderimg" />
                    </div>
                    <div className="founder-description">
                      <h3 className="founder-title">Stefan Hochhuth</h3>
                      <p className="founder-subtitle">
                        Founder at Hochhuth Consulting GmbH
                      </p>
                      <div className="d-flex justify-content-center social-icons">
                        <a
                          href="https://www.linkedin.com/in/stefan-hochhuth-8678b37/"
                          className="social-icon si-small si-borderless si-linkedin"
                        >
                          <i className="icon-linkedin"></i>
                          <i className="icon-linkedin"></i>
                        </a>
                        <a
                          href="mailto:stefan.hochhuth@hochhuth-consulting.de"
                          className="social-icon si-small si-borderless si-email3"
                        >
                          <i className="icon-email3"></i>
                          <i className="icon-email3"></i>
                        </a>
                      </div>
                    </div>
                    <p className="founder-desc-text">
                      Stefan is an economist by trade, holding master's degrees
                      in both Economics and Social/Political Sciences. He has a
                      particular interest in topics related to digital
                      governance, political economy, and economic policy. With
                      over 20 years of experience in international development
                      cooperation, he has worked for various institutions,
                      including GIZ, SDC, and the World Bank. Recognizing the
                      potential of digitalization for poverty reduction, he
                      bridges the gap between development economics/governance
                      and digital solutions knowledge.
                    </p>
                    <div className="">
                      <div className="text-end founder-check-position-btn">
                        <div className="card-box-actionBtn">
                          <a
                            href="/careers#section-team"
                            className="button button-border button-rounded button-fill fill-from-right button-blue"
                          >
                            <span>Meet the Team</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="page-section section bg-transparent m-0"
        >
          <div className="container clearfix">
            <div className="heading-block center">
              <h2>Contact</h2>
              <span>
                You have an interesting project in mind, want to enquire about
                our services or simply want to say hi? We always welcome your
                outreach! Simply send us a mail to
                <a href="mailto:info@hochhuth-consulting.de">
                  info@hochhuth-consulting.de
                </a>
              </span>
              <a
                href="mailto:info@hochhuth-consulting.de"
                className="mt-4 button button-border button-rounded button-fill fill-from-right button-blue"
              >
                <span>Contact</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
