import { logo } from "../assets";
import { navLinks } from "../constants/dataGen";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-ctn">
        <Link
          to="/"
          className="nav-link"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <img src={logo} alt="logo magasin" className="nav-logo" />
        </Link>
        <ul className="nav-menu">
          {navLinks.map((nav) => (
            <li key={nav.id} className="nav-item">
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
