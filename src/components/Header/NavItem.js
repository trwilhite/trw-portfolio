import React from "react";

const NavItem = ({ currentPage, onClick, page }) => {
  return (
    <li
      key={page}
      className={
        page === currentPage
          ? `navActive px-2 px-md-4 pt-md-3`
          : `px-2 px-md-4 pt-md-3`
      }
    >
      <span
        onClick={() => {
          onClick(page);
        }}
      >
        {page}
      </span>
    </li>
  );
};

export default NavItem;
