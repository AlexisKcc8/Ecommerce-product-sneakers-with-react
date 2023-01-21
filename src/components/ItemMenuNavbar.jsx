import React from "react";

export const ItemMenuNavbar = ({ children, ...props }) => {
  return (
    <li className="nav-item ">
      <h3 {...props}>{children}</h3>
    </li>
  );
};
