import React from "react";
import bioImage from "../../assets/images/bio-photo.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={bioImage} className="my-2" alt="bio" />
      <div className="my-2">
        <p>
          My name is Tamara Wilhite and I am an aspiring Full Stack Software
          Developer. My journey began when I graduated from the Univeristy of
          Maryland in 2018 with my Bachelor's degree in Psychology and a minor
          in Neuroscience. Following my college graduation, I worked some odd
          jobs serving tables and nannying until I eventually made my way into
          the professional world. In 2020, I began working in Marketing and
          Sales, and eventually made a move into Human Resources for an IT
          company in Rockville, MD.
          <br />
          <br />
          After being introduced to the world of technology, I quickly fell in
          love with it and decided to pursue a career change. I am currently
          enrolled in the Full Stack Web Development Coding Bootcamp through
          George Washington University and am enjoying every moment of it. I am
          exceptionally excited to be learning the challenging, dynamic, and
          straight-up <strong>FUN</strong> art of coding and I am eagerly
          anticipating the opportunity to pursue this passion in the real world.
          I look forward to hearing from you regarding joining your team as a
          valuable, energetic, and motivated asset. Please enjoy exploring my
          page to see what I can bring to the table.
        </p>
      </div>
    </section>
  );
}

export default About;
