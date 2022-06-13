import React, { useEffect, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";
import { FaAlignJustify } from "react-icons/fa";

export default function Navigation() {
  const [aside, setAside] = useState(false);
  useEffect(() => {
    document.querySelector(".header_nav").style.opacity = 1;
  }, []);
  return (
    <nav className="nav header_nav">
      <div className="left">
        <h1 className="my-name"> Kendrick Izaguirre. </h1>
        <a href="https://www.linkedin.com/in/kendrick-izaguirre-0806451a2">
          <button className="linkedIn-btn">
            <AiFillLinkedin /> GET IN TOUCH!
          </button>
        </a>
      </div>

      <div className={`right ${aside && "active"}`}>
        <ul class="nav nav-pills justify-content-end ">
          <li class="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li class="nav-item ">
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <span className="burger_icon" onClick={(e) => setAside(!aside)}>
        <FaAlignJustify color="#fff" />
      </span>
    </nav>
  );
}
