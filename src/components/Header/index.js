import React from "react";
import "./style.css";
import { useEffect } from "react";
import Nav from "./Nav";

function Header(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <header className="d-flex flex-row flex-wrap justify-content-between align-items-center m-2">
      <a className="text-decoration-none text-black" href="/">
        <h1 className="ps-2">Tamara Wilhite</h1>
      </a>
      <Nav
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </header>
  );
}

export default Header;
