import React from "react";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Tamara Wilhite
        </a>
      </h2>
      <nav>
        <ul className="nav-ul">
          {pages.map((page) => (
            <li key={page.name} className="nav-li">
              <span onClick={() => setCurrentPage(page)}>{page.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
