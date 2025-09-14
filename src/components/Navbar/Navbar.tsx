import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/home">Bài 1 (Home)</NavLink>
      <NavLink to="/products">Bài 2 & 4 (Products)</NavLink>
      <NavLink to="/tasks">Bài 3 (Tasks)</NavLink>
      <NavLink to="/blog/posts">Bài 5 (Blog)</NavLink>
      <NavLink to="/ex6">Bài 6 (Layout)</NavLink>
      <NavLink to="/login">Bài 8 (Auth)</NavLink>
    </nav>
  );
}

export default Navbar;
