import { Routes, Route, Link, NavLink } from "react-router-dom";
import { MainPage } from "../../main_page";
import { About } from "../pages/about";
import { Site } from "../pages/site";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          MYBRAND
        </Link>

        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink
              className="navbar-link"
              activeClassName="navbar-link: active"
              to="/about"
            >
              About me
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              className="navbar-link"
              activeClassName="navbar-link: active"
              to="/site"
            >
              Site
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/site" element={<Site />} />
      </Routes>
    </>
  );
}

export default Navbar;
