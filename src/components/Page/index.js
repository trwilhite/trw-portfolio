import React from "react";
import About from "../About";
import Projects from "../Projects";
import ContactForm from "../Contact";
import Resume from "../Resume";
import PageContent from "./PageContent";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Projects />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="page">
      <PageContent>{renderPage()}</PageContent>
    </div>
  );
}

export default Page;
