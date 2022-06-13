import React, { useEffect } from "react";
import BusinessCard from "../images/BusinessCard.jpg";
import pizza from "../images/pizza.jpg";
import madstat2 from "../images/madstat2.jpg";

export default function Work() {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let TopArea = document
        .querySelector(".portfolio")
        .getBoundingClientRect().top;
      if (TopArea < 230) {
        document.querySelector(".portfolio").classList.add("active");
      }
    });
  }, []);

  return (
    <container className="portfolio  text-white mb-0" id="portfolio">
      <div className="container">
        <h2 className="text-center text-uppercase text-white" id="work-title">
          My work
        </h2>
        <hr className="hr2"></hr>
      </div>

      <div class="my-projects">
        <div class="col-lg ">
          <a href="https://react-business-card-b4jv2kdae-kdot117.vercel.app/">
            <img
              class="business-card"
              src={BusinessCard}
              alt=""
              width="500"
              height="300"
              Style="border-radius: 10px;"
            />
          </a>

          <div>
            <h5> React Business Card</h5>
            <p>
              <span class="tech">HTML</span>
              <span class="tech">CSS</span>
              <span class="tech">React</span>
            </p>
            <p>
              Simple React business card created with react. I had an
              opportunity to see how components worked with this project.
            </p>
          </div>
        </div>

        <div class="col-lg">
          <a href=" https://kendrick-pizza-site-y560r0rft-kdot117.vercel.app/">
            <img
              class="pizza-card"
              src={pizza}
              alt=""
              width="500"
              height="300"
              Style="border-radius: 10px;"
            />
          </a>
          <div>
            <h5> Mock Restaurat</h5>
            <p>
              <span class="tech">HTML</span>
              <span class="tech">CSS</span>
              <span class="tech">React</span>
              <span class="tech">JavaScript</span>
              <p>
                Mock restaurant project for a fictional pizza shop. I learned
                how routing and props work with this project.
              </p>
            </p>
          </div>
        </div>

        <div class="col-lg ">
          <div className="coming--soon">
            <img
              class="pizza-card2"
              src={madstat2}
              alt=""
              width="500"
              height="300"
              Style="border-radius: 10px;"
            />
            <h5> Mad_Stats </h5>
            <p>
              <span class="tech">HTML</span>
              <span class="tech">CSS</span>
              <span class="tech">React</span>
              <span class="tech">JavaScript</span>
              <p>
                Upcoming project analyzing NFL data that is easily consumed.
              </p>
            </p>
          </div>
        </div>
      </div>
    </container>
  );
}
