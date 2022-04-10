import React from "react";

const Project = ({ img, alt, title, desc, site, code }) => {
  return (
    <section>
      <div class="card">
        <img src={img} class="card-img-top" alt={alt} />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{desc}</p>
        </div>
        <div class="card-body">
          <a href={site} class="card-link">
            View Site
          </a>
          <a href={code} class="card-link">
            View Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
