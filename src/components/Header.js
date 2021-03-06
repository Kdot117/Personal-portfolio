import React, { useEffect } from "react";
import kenny from "../images/kenny.jpg";

export default function Header() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".pattern").style.opacity = 1;
    }, 500);
  }, []);
  return (
    <container className="art-bg">
      <div className="pattern">
        <img src={kenny} className="img" alt="logo" height="400" length="400" />

        <h2 className="name-tag">&lt;Kendrick/&gt;</h2>
      </div>
    </container>
  );
}
