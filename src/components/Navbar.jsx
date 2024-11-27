import React from "react";
import routes from "../constants/mockData.js";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {routes.map(({ id, name, route }) => (
          <li key={id}>
            <Link to={`${route}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
