import "./main_page.css";

export const MainPage = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="personal-info">
          <div className="avatar-body">
            <div className="avatar">
              <span className="avatar-initial" aria-label="Brand logo: A capital k with a purple circle background">K</span>
            </div>
          </div>
          <p className="text name">Keisha A. Calzada</p>
          <p className="text description">
            Fashion Designer - Makeup and Nail Artist
          </p>
        </div>
      </div>
      <div className="container">
        <ul className="social-list">
          <li className="social-item">
            <a
              className="social-link"
              href="https://www.facebook.com/philemonzs"
              target="_blank"
              aria-label="link to Phil Atun's facebook" role="img"
            >
              <img
                className="link-item"
                src={require("./assets/img/facebook.png")}
                alt="Facebook"
              />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link"
              href="https://github.com/field-eater"
              target="_blank"
              aria-label="link to Phil Atun's github"
            >
              <img
                className="link-item"
                src={require("./assets/img/github.png")}
                alt="Github"
              />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link"
              href="https://twitter.com/phil2N"
              target="_blank"
              aria-label="link to Phil Atun's twitter"
            >
              <img
                className="link-item"
                src={require("./assets/img/twitter.png")}
                alt="Twitter"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
