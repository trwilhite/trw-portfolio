import React from "react";
import "./style.css";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
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
  );
}

export default Nav;
