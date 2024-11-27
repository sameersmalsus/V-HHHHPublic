import React, { useEffect, useState } from "react";
import axios from "axios";

const ReadMoreContent = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  const characterLimit = 500;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortContent =
    content.length > characterLimit
      ? content.slice(0, characterLimit)
      : content;

  useEffect(() => {
    if (content.length > characterLimit) {
      setShowReadMore(true);
    }
  }, [content]);

  return (
    <div className="text-justify">
      <div
        dangerouslySetInnerHTML={{
          __html: isExpanded
            ? content
            : shortContent + (showReadMore ? "..." : ""),
        }}
      />
      {showReadMore && (
        <span
          onClick={toggleReadMore}
          className="read-more-button btn-link"
          style={{ cursor: "pointer" }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </span>
      )}
    </div>
  );
};

export default function HomePageSlider() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios
      .get("https://argosmob.uk/api-random/get-how-we-works.php")
      .then((response) => {
        if (response?.data?.success) {
          setWorks(response?.data?.data);
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching the navigation data:", error);
      });
  }, []);

  useEffect(() => {
    if (works.length > 0) {
      const $owl = window.$(".owl_1");
      if ($owl.length) {
        $owl.owlCarousel({
          loop: false,
          rewind: true,
          margin: 0,
          nav: true,
          dots: false,
          items: 1,
          smartSpeed: 1000,
          autoplay: false,
          navText: [
            '<i class="icon-angle-left"></i>',
            '<i class="icon-angle-right"></i>',
          ],
        });

        // Initialize carousel navigation
        const $carouselNavLinks = window.$(".carousel-nav a");
        $carouselNavLinks.each(function (slideIndex) {
          const $this = window.$(this);
          $this.attr("data-num", slideIndex);
          $this.click(function (e) {
            $owl.trigger("to.owl.carousel", [slideIndex, 1500]);
            e.preventDefault();
          });
        });

        // Handle carousel change event
        $owl.on("changed.owl.carousel", function (event) {
          $carouselNavLinks.removeClass("active");
          window
            .$(".carousel-nav a[data-num=" + event.item.index + "]")
            .addClass("active");
        });
      }
    }
    return () => {
      const $owl = window.$(".owl_1");
      if ($owl.length) {
        $owl.trigger("destroy.owl.carousel");
      }
    };
  }, [works]);

  return (
    <section
      id="how-we-work"
      className="page-section section bg-transparent m-0"
    >
      <div className="vertical-middle">
        <div className="container clearfix">
          <div className="heading-block center">
            <h2>HOW WE WORK</h2>
            <span>
              Our approach: adapting to target groups, working with different
              topics,
              <br />
              implementing agile development and using technology
            </span>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="owl-carousel owl_1">
                {works.map((item, index) => (
                  <div key={index} className="media-29101 d-md-flex w-100">
                    <div className="row align-items-center">
                      <div className="col-lg-7 col-sm-7">
                        <div className="heading-block">
                          <h4 className="text-uppercase">{item?.Title}</h4>
                        </div>
                        <ReadMoreContent content={item?.Description} />
                      </div>
                      <div className="col-lg-4 col-sm-5">
                        <img
                          alt=""
                          src="images/GR_Hochhuth_Strategie_page-0001-1.jpg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex row justify-content-between carousel-nav">
                {works.map((item, index) => (
                  <a
                    key={index}
                    href="h"
                    className={`col-lg-3 col-md-4 mt-2 ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    <div className="Slider-text">
                      <div className="Sliderbox-text">0{index + 1}</div>
                      <h3>{item?.Title}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
