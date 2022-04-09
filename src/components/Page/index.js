import React from "react";
import Home from "../Home";
import About from "../About";
import Project from "../Project";
import ContactForm from "../Contact";
import Resume from "../Resume";
import PageContent from "./PageContent";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Projects":
        return <Project />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <PageContent>{renderPage()}</PageContent>
    </div>
  );
}

export default Page;
