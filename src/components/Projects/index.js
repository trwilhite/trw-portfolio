import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import sole2Img from "../../assets/images/soleintentions2.png";
import soleImg from "../../assets/images/soleintentions.png";
import cityImg from "../../assets/images/citygirl.png";
import budgetImg from "../../assets/images/budget.png";
import weatherImg from "../../assets/images/weather.png";
import workdayImg from "../../assets/images/workday.png";

const PROJECTS = [
  {
    id: 1,
    img: sole2Img,
    alt: "sole intentionsversion 2 screenshot",
    title: "Sole Intentions 2.0",
    desc: "Sole Intentions is an e-commerce site designed for sneaker reselling. We did a complete refactor from the original Sole Intentions to integrate the full MERN stack and add admin capabilities.",
    site: "https://sole-intentions.herokuapp.com/",
    code: "https://github.com/trwilhite/sole-REACTions.git",
  },
  {
    id: 2,
    img: soleImg,
    alt: "sole intentions screenshot",
    title: "Sole Intentions",
    desc: "Sole Intentions is an e-commerce site designed for sneaker reselling. It comes equipped with a functional Stripe API for payment processing (in test mode of course!) and is stored in a SQL database.",
    site: "https://soleintentions.herokuapp.com/",
    code: "https://github.com/trwilhite/sole-intentions-TMT.git",
  },
  {
    id: 3,
    img: cityImg,
    alt: "city girl screenshot",
    title: "CityGirl",
    desc: "CityGirl is a front-end-only project that uses two different APIs to allow users the ability to find brewery options with nearby parking in 15 different major cities.",
    site: "https://danielkim13.github.io/code_breakers_repo/",
    code: "https://github.com/trwilhite/code_breakers_repo.git",
  },
  {
    id: 4,
    img: budgetImg,
    alt: "budget tracker screenshot",
    title: "Budget Tracker",
    desc: "A Progressive Web Application (PWA) that allows you to track expenses on-the-go, even if you do not have internet connection. This application is stored in a Mongo database.",
    site: "https://sheltered-basin-96202.herokuapp.com/",
    code: "https://github.com/trwilhite/pwa-budget-tracker.git",
  },
  {
    id: 5,
    img: weatherImg,
    alt: "weather dashboard screenshot",
    title: "Weather Dashboard",
    desc: "An application that allows users to search a city and view the current weather conditions and UV Index, along with a 5-Day Forecast. It also uses local storage to save recent searches.",
    site: "https://trwilhite.github.io/weather_dash_tw/",
    code: "https://github.com/trwilhite/weather_dash_tw.git",
  },
  {
    id: 6,
    img: workdayImg,
    alt: "workday scheduler screenshot",
    title: "Workday Scheduler",
    desc: "This scheduler provides the ability to add events to your scheduler using local storage. It also highlights time blocks based on the time of day.",
    site: "https://trwilhite.github.io/my-workday-scheduler/",
    code: "https://github.com/trwilhite/my-workday-scheduler.git",
  },
];

function Projects() {
  return (
    <div>
      <h1 id="portfolio" className="pt-3 text-center heading">
        Portfolio
      </h1>
      <Carousel variant="dark" className="carousel">
        {PROJECTS.map((proj) => (
          <Carousel.Item key={proj.id} className="carouselItem">
            <img className="d-block img pb-3" src={proj.img} alt={proj.alt} />
            <Carousel.Caption>
              <h3 className="projTitle">{proj.title}</h3>
              <div className="mb-1">
                <a
                  href={proj.site}
                  target="_blank"
                  className="text-dark text-decoration-none projText"
                >
                  View Site
                </a>
                <span> | </span>
                <a
                  href={proj.code}
                  target="_blank"
                  className="text-dark text-decoration-none projText"
                >
                  View Code
                </a>
              </div>

              <p className="projText">{proj.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
export default Projects;
