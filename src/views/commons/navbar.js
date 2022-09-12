import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <button href="#" className="navbar-brand">
        MYBRAND
      </button>

      <ul className="navbar-list">
        <li className="navbar-item">
          <button className="navbar-link" href="#">
            About me
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" href="#">
            Site
          </button>
        </li>
      </ul>
    </nav>
  );
};
