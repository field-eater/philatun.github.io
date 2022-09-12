import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        MYBRAND
      </a>

      <ul className="navbar-list">
        <li className="navbar-item">
          <a className="navbar-link" href="#">
            About me
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#">
            Site
          </a>
        </li>
      </ul>
    </nav>
  );
};
