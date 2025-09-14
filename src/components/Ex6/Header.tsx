import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
        Home
      </NavLink>
      <NavLink to="/product" className="nav-link">
        Product
      </NavLink>
      <NavLink to="/detail" className="nav-link">
        Detail
      </NavLink>
    </nav>
  );
}
