import React from "react";
import "./style.css";
import { useEffect } from "react";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <header className="d-flex flex-row flex-wrap justify-content-between align-items-center m-2">
      <h1 className="text-decoration-none ps-2">Tamara Wilhite</h1>
      <nav>
        <ul className="d-flex flex-row list-unstyled">
          {pages.map((page) => (
            <li key={page.name} className="px-4 pt-3">
              <span
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
