import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">WorldAtlas</h2>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/country">Country</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;