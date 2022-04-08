import React from "react";

function Nav() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Tamara Wilhite
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              about me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#projects">
              projects
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#contact">
              contact Me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#resume">
              resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
