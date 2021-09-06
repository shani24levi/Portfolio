import "./style.css";
import Skills from './Skills';
import { skillsBar } from '../../data/mydata';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
        <div id="Skills">
          <div className="row d-flex justify-content-center" style={{padding: '3%'}}>
            {skillsBar.map((x) =>
              <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
            )}̀
          </div>
        </div>

        <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>Material-ui</li>
          <li>React.js</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Eslint</li>
          <li>Chrome Dev</li>
          <li>Git & Github</li>
        </div>
      </div>
  </div>
  );
};

export default About;
