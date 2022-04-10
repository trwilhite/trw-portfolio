import React from "react";
import About from "../About";
import Project from "../Project";
import ContactForm from "../Contact";
import Resume from "../Resume";
import PageContent from "./PageContent";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Project />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <PageContent>{renderPage()}</PageContent>
    </div>
  );
}

export default Page;
