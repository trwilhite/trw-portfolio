import React from "react";
import "./style.css";
import jsLogo from "../../assets/images/skills-logos/javascript.png";
import htmlLogo from "../../assets/images/skills-logos/html.png";
import cssLogo from "../../assets/images/skills-logos/css.png";
import bootstrapLogo from "../../assets/images/skills-logos/bootstrap.png";
import reactLogo from "../../assets/images/skills-logos/react.png";
import nodeLogo from "../../assets/images/skills-logos/nodejs.png";
import mernLogo from "../../assets/images/skills-logos/mern.png";
import mysqlLogo from "../../assets/images/skills-logos/mysql.png";
import mongoLogo from "../../assets/images/skills-logos/mongo.png";
import githubLogo from "../../assets/images/skills-logos/github.png";
import herokuLogo from "../../assets/images/skills-logos/heroku.png";
import atlasLogo from "../../assets/images/skills-logos/atlas.png";
import gitLogo from "../../assets/images/skills-logos/git.png";

function Skills() {
  return (
    <div>
      <div className="container">
        <div className="row mb-4">
          <h3>Frontend Technologies</h3>
          <div className="col">
            <img src={jsLogo} alt="javascript logo" />
          </div>
          <div className="col">
            <img src={reactLogo} alt="react logo" />
          </div>
          <div className="col">
            <img src={htmlLogo} alt="html logo" />
          </div>
          <div className="col">
            <img src={cssLogo} alt="css logo" />
          </div>
          <div className="col">
            <img src={bootstrapLogo} alt="bootstrap logo" />
          </div>
        </div>
        <div className="row mb-4">
          <h3>Backend Technologies</h3>
          <div className="col">
            <img src={nodeLogo} alt="node.js logo" />
          </div>
          <div className="col">
            <img src={mernLogo} alt="mern stack logo" />
          </div>
          <div className="col">
            <img src={mysqlLogo} alt="mysql logo" />
          </div>
          <div className="col">
            <img src={mongoLogo} alt="mongobd logo" />
          </div>
        </div>
        <div className="row">
          <h3>Deployment & Version Control</h3>
          <div className="col">
            <img src={gitLogo} alt="git logo" />
          </div>
          <div className="col">
            <img src={githubLogo} alt="github logo" />
          </div>
          <div className="col">
            <img src={atlasLogo} alt="atlas logo" />
          </div>
          <div className="col">
            <img src={herokuLogo} alt="heroku logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
