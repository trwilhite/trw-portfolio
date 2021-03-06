import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Footer() {
  return (
    <footer className="border-top bg-white fixed-bottom">
      <nav className="d-flex flex-row justify-content-center">
        <a
          className="text-decoration-none icon py-2 px-4"
          href="https://github.com/trwilhite"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />{" "}
        </a>
        <a
          className="text-decoration-none icon py-2 px-4"
          href="https://www.linkedin.com/in/tamara-wilhite/"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />{" "}
        </a>
        <a
          className="text-decoration-none icon py-2 px-4"
          href="https://stackoverflow.com/users/17314835/tamara-wilhite"
          target="_blank"
        >
          <FontAwesomeIcon icon="fa-brands fa-stack-overflow" size="2x" />{" "}
        </a>
      </nav>
    </footer>
  );
}
export default Footer;
