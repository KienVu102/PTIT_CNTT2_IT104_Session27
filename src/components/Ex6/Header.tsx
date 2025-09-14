import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header-ex6">
      <NavLink to="/ex6" end className="nav-link">
        Home
      </NavLink>
      <NavLink to="/ex6/product" className="nav-link">
        Product
      </NavLink>
      <NavLink to="/ex6/detail" className="nav-link">
        Detail
      </NavLink>
    </nav>
  );
}
