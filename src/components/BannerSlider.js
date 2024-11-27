
import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function BannerSlider({
  id,
  heading,
  subheading,
  btn,
  mainpage,
}) {
  
  return (
    <section
      id="slider"
      className={`slider-element min-vh-100 dark include-header ${mainpage}`}
    >
      <div id={id} className="slider-inner">
        <div className="container">
          <div className="slider-caption slider-caption-center">
            <h2 className="fadeInDown animated" data-animate="fadeInDown">
              {heading}
            </h2>
           
            <div dangerouslySetInnerHTML={{ __html: subheading }} />
             
            
            {btn.text !== undefined && (
              <div className="text-center mt-0 mt-md-4">
                <HashLink
                  to={btn.urlRoute}
                  data-href="#section-positions"
                  className="button button-border button-rounded button-fill fill-from-right button-white m-0"
                >
                  <span>{btn.text}</span>
                </HashLink>
              </div>
            )}
          </div>
        </div>
        <div className="bg-overlay-bg op-05"></div>
      </div>
    </section>
  );
}
