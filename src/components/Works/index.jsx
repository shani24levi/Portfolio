import "./style.css";
import Project from './Project';
import { projects } from '../../data/mydata';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="works">
      <h1>See My Work</h1>

      <div className="row d-flex justify-content-center">
        {projects && projects.map((x) =>
          <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills} faClass={x.faClass} github={x.github}/>
        )}
      </div>
    </div>
  );
};

export default About;
