import React from "react";
import "./style.css";
import NavItem from "./NavItem";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <nav>
      <ul className="d-flex flex-row list-unstyled">
        {pages.map((page) => (
          <NavItem
            page={page}
            currentPage={currentPage}
            onClick={setCurrentPage}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
