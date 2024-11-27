import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
export default function PageSubMenu() {
  const [navigations, setNavigations] = useState([]);
  useEffect(() => {
    axios
      .get("https://argosmob.uk/api-random/getHomeNavigations.php")
      .then((response) => {
        if (response?.data?.success) {
          setNavigations(response?.data?.data);
          // console.error(response?.data?.data);
        } else {
          console.log(response?.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching the navigation data:", error);
      });
  }, []);
  // Function to convert title to kebab-case
  const toKebabCase = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <div id="page-menu" className="dots-menu dots-menu-border">
      <div id="page-menu-wrap">
        <div className="container">
          <div className="page-menu-row">
            <nav className="page-menu-nav">
              <ul className="page-menu-container one-page-menu" data-offset="0">
                {navigations.map((navItem, index) => (
                  <li key={index} className="page-menu-item">
                    <HashLink to={(navItem.Title==="Careers")?`/careers`:`/home#${toKebabCase(navItem.Title)}`} data-href={toKebabCase(navItem.Title)}>
                      <div>{navItem.Title}</div>
                    </HashLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div id="page-menu-trigger">
              <i className="icon-reorder"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
