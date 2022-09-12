import "./main_page.css";

export const MainPage = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="personal-info">
          <div className="avatar-body">
            <div className="avatar">
              <span className="avatar-initial">K</span>
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
            <button className="social-link" href="#" target="_blank">
              <img
                className="link-item"
                src={require("./assets/img/facebook.png")}
                alt="Facebook"
              />
            </button>
          </li>
          <li className="social-item">
            <button className="social-link" href="#" target="_blank">
              <img
                className="link-item"
                src={require("./assets/img/github.png")}
                alt="Github"
              />
            </button>
          </li>
          <li className="social-item">
            <button className="social-link" href="#" target="_blank">
              <img
                className="link-item"
                src={require("./assets/img/twitter.png")}
                alt="Twitter"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
