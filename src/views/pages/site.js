import "./pages.css";

export const Site = () => {
  return (
    <div className="main">
      <div className="about">
        <p className="title">About this Website!</p>
        <p className="subtext">
          Author: <span className="i-purple">Keizhada</span> Posted:{" "}
          <span className="i-purple">December 14, 2020</span>
        </p>
        <div className="paragraph">
          <p>
            This website is made using ReactJS and hosted in github powered by
            netlify
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>Thank you so much!</p>
        </div>
      </div>
    </div>
  );
};
