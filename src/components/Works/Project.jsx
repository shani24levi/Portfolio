import React from 'react';
import "./style.css";

function Project({id, name, url, skills,faClass,github}) {
    return (
        <div key={id} data-aos="fade-up" className=" col-10 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <div className="col-12 d-flex justify-content-around">
            <a title={url} className="project-name col-10" rel="noopener noreferrer" target="_blank" href={url}><h2 style={{width:"70%"}}>{name}</h2></a>
            <a title={github} className="project-name" style={{alignSelf: 'center'}} rel="noopener noreferrer" target="_blank" href={github}><i style={{fontSize:'200%'}} className="fab fa-github"></i></a>
            </div>
            { skills && <h3>{skills.map(skill => skill)}</h3> }
            { faClass && <div className="col-12 ">{faClass.map((faClass,i) => <i key={i} className={`${faClass} mx-auto my-auto p-4`} style={{fontSize:'120%'}}></i>)}</div> }

        </div>
    );
}

export default Project;