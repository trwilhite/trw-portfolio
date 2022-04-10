import React from "react";
import "./style.css";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <header className="d-flex flex-row flex-wrap justify-content-between align-items-center m-1">
      <h1 className="text-decoration-none ps-2">Tamara Wilhite</h1>
      <nav>
        <ul className="d-flex flex-row list-unstyled">
          {pages.map((page) => (
            <li key={page.name} className="p-4">
              <span onClick={() => setCurrentPage(page)}>{page.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
