import React from "react";

const NavItem = ({ currentPage, onClick, page }) => {
  return (
    <li
      key={page}
      className={page === currentPage ? `navActive px-4 pt-3` : `px-4 pt-3`}
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
