import React from "react";
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
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Front-End Technologies
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>React.js</li>
                      <li>JavaScript</li>
                      <li>Bootstrap</li>
                      <li>CSS</li>
                      <li>HTML5</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Back-End Technologies
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>MERN Stack</li>
                      <li>User Authentication</li>
                      <li>Session Storage</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Databases
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>MySQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Deployment & Version Control
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>Heroku</li>
                      <li>Github/Github Pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;
