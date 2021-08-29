import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {

  const handleClickUrl = () => {
    window.open("https://drive.google.com/file/d/15lst8uq55QVgawbpHJk8WyCp_u0YLAzS/view");
  };

  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Helo,</p>
          <p>I am Shani</p>
          <p>Jonier Software developer</p>
        </h1>
          <button onClick={handleClickUrl}>My Resume</button>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/me_1.png`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
