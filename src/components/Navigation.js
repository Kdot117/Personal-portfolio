import React from "react";
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from "react-scroll";


export default function Navigation() {
    return (
        <nav className="nav">
            <div className="left">
                <h1 className="my-name"> Kendrick Izaguirre. </h1>
                <a href="https://www.linkedin.com/in/kendrick-izaguirre-0806451a2">
                    <button className="linkedIn-btn"> 
                        <AiFillLinkedin /> GET IN TOUCH!
                    </button> 
                </a>
            </div>

            <div className="right">
                <ul class="nav nav-pills justify-content-end ">
                    <li class="nav-item">
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link  to="portfolio"  spy={true} smooth={true} offset={50} duration={500}>Work</Link>
                    </li>
                    <li class="nav-item ">
                        <Link to="footer"  spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}