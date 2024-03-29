import { Link, useLocation } from "react-router-dom";
import Particles from 'react-particles-js';
import "./style.css";

const Home = () => {

  const handleClickUrl = () => {
    window.open("https://drive.google.com/file/d/1Dvzr1hS9shZGen4y6-2f6KFFRDAjN_JN/view");
  };

  return (
    <div className="home">
      <div style={{ position: 'absolute', width: "100%" }}>
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

      <div className="title" data-aos="fade-up" >
        <h1>
          <p>Helo,</p>
          <p>I am Shani</p>
          <p>Software developer</p>
        </h1>
        <button onClick={handleClickUrl}>My Resume</button>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/me_2.png`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
