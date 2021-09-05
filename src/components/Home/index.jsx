import { Link, useLocation } from "react-router-dom";
import Particles from 'react-particles-js';
import "./style.css";

const Home = () => {

  const handleClickUrl = () => {
    window.open("https://drive.google.com/file/d/15lst8uq55QVgawbpHJk8WyCp_u0YLAzS/view");
  };

  return (
    <div className="home">
      <div style={{ position: 'absolute' }}>
        <Particles
          height="100vh"
          width="100%"
          params={{
            "particles": {
              "number": {
                "value": 75,
                "density": {
                  "enable": false
                }
              },
              "color": {
                "value": "#000000"
              },
              "size": {
                "value": 10,
                "random": true
              },
              "move": {
                "direction": "bottom",
                "out_mode": "out"
              },
              "line_linked": {
                "enable": false
              }
            },
            "interactivity": {
              "events": {
                "onclick": {
                  "enable": true,
                  "mode": "remove"
                }
              },
              "modes": {
                "remove": {
                  "particles_nb": 5
                }
              }
            }
          }} />
      </div>

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
