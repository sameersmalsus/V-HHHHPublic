import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer" className="pb-3" style={{marginBottom:"0px !important"}}>
      <div id="copyrights">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center text-md-left">
              <address className="mb-0">
                <strong>Hochhuth Consulting GmbH</strong>
                <br />
                Christinenstr 16
                <br />
                10119 Berlin, Germany
              </address>
            </div>
            <div className="col-md-4 text-center text-md-left">
              <div className="divider divider-center">
                <div className="social-icon-box">
                  <a
                    href="https://www.facebook.com/Hochhuth-Consulting-GmbH-100420612079192/"
                    className="rounded-circle si-borderless si-facebook si-small social-icon"
                  >
                    <i className="icon-facebook"></i>
                    <i className="icon-facebook"></i>
                  </a>
                  <a
                    href="h"
                    className="social-icon si-small si-borderless si-linkedin"
                  >
                    <i className="icon-linkedin"></i>
                    <i className="icon-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <p>
                <a href="mailto:info@hochhuth-consulting.de">
                  <i className="icon-envelope"></i>info@hochhuth-consulting.de
                </a>
              </p>
              <div className="clear"></div>
              <p className="mb-0">
                <a href="tel:+4930868706600">
                  <i className="icon-phone"></i>+49 (30) 868706600
                </a>
              </p>
            </div>
          </div>
          <div className="clear"></div>
          <div className="row mt-5">
            <div className="col-md-4 copyright-links justify-content-md-start">
              <Link to="/privacy-and-policy">Privacy Policy</Link> /
              <Link to="/impress">Impress</Link>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              © 2024 by Hochhuth Consulting GmbH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
