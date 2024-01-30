import "./AboutContentStyles.css";
import pro from "../assests/pro3.png";
import pro1 from "../assests/pro2.png";
import React from "react";
import { Link } from "react-router-dom";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a full stack web developer. I create responsive secure websites
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={pro} className="img" alt="true"></img>
          </div>
          <div className="img-stack bottom">
            <img src={pro1} className="img" alt="true"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
