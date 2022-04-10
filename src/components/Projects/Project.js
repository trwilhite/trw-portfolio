import React from "react";
import "./style.css";

const Project = ({ img, alt, title, desc, site, code }) => {
  return (
    <div className="col-md-4 col-lg-3 p-0 m-2 m-lg-5 card shadow-lg">
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
      <div className="card-footer text-center p-3">
        <a href={site} target="_blank" className="card-link">
          View Site
        </a>
        <span> | </span>
        <a href={code} target="_blank" className="card-link">
          View Code
        </a>
      </div>
    </div>
  );
};

export default Project;
