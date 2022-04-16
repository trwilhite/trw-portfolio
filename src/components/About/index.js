import React from "react";
import bioImage from "../../assets/images/bio-photo.jpg";
import "./style.css";

function About() {
  return (
    <section className="d-flex flex-column align-items-center justify-space-between">
      <h1 id="about" className="py-3 text-center heading">
        Hi, I'm Tamara!
      </h1>

      <div className="text-center bio">
        <p>
          As a Full Stack Web Developer, my journey began when I graduated from
          college and was struggling to find my passion in the professional
          world. In 2021, I made a move into Human Resources for an IT company
          in Rockville, MD. After being introduced to the world of technology, I
          quickly fell in love with it.
          <br />
          <br />I enrolled in the Full Stack Web Development Coding Bootcamp at
          George Washington University and enjoyed every moment of it. I am
          extremely excited to be learning the challenging, dynamic, and
          straight-up FUN art of coding. I look forward to hearing from you
          regarding joining your team as a valuable, energetic, and motivated
          asset.
        </p>
      </div>
      <img src={bioImage} className="mt-1 mb-5 bioImg" alt="bio" />
    </section>
  );
}

export default About;
