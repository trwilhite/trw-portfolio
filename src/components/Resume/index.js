import React from "react";
import Skills from "./Skills";
import "./style.css";
import resImg from "../../assets/images/resume.png";
import resume from "../../assets/TamaraWilhite-Resume.pdf";

function Resume() {
  return (
    <div className="resPage">
      <h1 id="resume" className="text-center">
        Resume & Skills
      </h1>
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="resDiv card col-3 m-5">
            <img src={resImg} className="card-img" alt="screenshot of resume" />
            <div className="card-img-overlay resLink text-center">
              <a className="text-decoration-none" href={resume} download>
                <h2 className="card-title text-dark mt-5 pt-5">
                  Download My Resume
                </h2>
              </a>
            </div>
          </div>
          <div className="col-6 m-5">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;
