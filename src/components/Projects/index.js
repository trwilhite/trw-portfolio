import React from "react";
import Project from "./Project";
import soleImg from "../../assets/images/sole-intentions.jpeg";
import cityImg from "../../assets/images/citygirl.png";
import budgetImg from "../../assets/images/budget-tracker.png";
import weatherImg from "../../assets/images/weather-dash.png";
import workdayImg from "../../assets/images/work-sched.png";
import quizImg from "../../assets/images/code-quiz.png";

const PROJECTS = [
  {
    img: soleImg,
    alt: "sole intentions screenshot",
    title: "Sole Intentions",
    desc: "description here",
    site: "https://soleintentions.herokuapp.com/",
    code: "https://github.com/trwilhite/sole-intentions-TMT.git",
  },
  {
    img: cityImg,
    alt: "city girl screenshot",
    title: "CityGirl",
    desc: "description here",
    site: "https://danielkim13.github.io/code_breakers_repo/",
    code: "https://github.com/trwilhite/code_breakers_repo.git",
  },
  {
    img: budgetImg,
    alt: "budget tracker screenshot",
    title: "Budget Tracker",
    desc: "description here",
    site: "https://sheltered-basin-96202.herokuapp.com/",
    code: "https://github.com/trwilhite/pwa-budget-tracker.git",
  },
  {
    img: weatherImg,
    alt: "weather dashboard screenshot",
    title: "Weather Deshboard",
    desc: "description here",
    site: "https://trwilhite.github.io/weather_dash_tw/",
    code: "https://github.com/trwilhite/weather_dash_tw.git",
  },
  {
    img: workdayImg,
    alt: "workday scheduler screenshot",
    title: "Workday Scheduler",
    desc: "description here",
    site: "https://trwilhite.github.io/my-workday-scheduler/",
    code: "https://github.com/trwilhite/my-workday-scheduler.git",
  },
  {
    img: quizImg,
    alt: "code quiz screenshot",
    title: "Code Quiz",
    desc: "description here",
    site: "https://trwilhite.github.io/code-quiz-week4/",
    code: "https://github.com/trwilhite/code-quiz-week4.git",
  },
];

function Projects(props) {
  return (
    <div>
      {PROJECTS.map((proj) => (
        <Project
          img={proj.img}
          alt={proj.alt}
          title={proj.title}
          desc={proj.desc}
          site={proj.site}
          code={proj.code}
        />
      ))}
    </div>
  );
}
export default Projects;
