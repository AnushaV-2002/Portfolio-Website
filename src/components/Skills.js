import React from "react";
import "../css/skills.css"
import HTML from '../images/htmlhd.png';
import CSS from "../images/csshd.png";
import Javascript from "../images/Javascript.png";
import Reactpng from "../images/React.png";
import Node from "../images/node.png";
import Express from "../images/express.png";
import MongoDB from "../images/mongoDB.png";

function Skills(){
    return(
      <section id="skills">
       <div className="skills_container">
        <h2 className="skills_heading">Skills</h2>
        <div className="skills_layout">
          <div className="frontend_skills_container">
            <h3>Frontend</h3>
            <div className="frontend">
               <div className="html" style={{textAlign: "center"}}>
                   <img src="https://skillicons.dev/icons?i=html" />
                   <p className="skill_label">HTML</p>
               </div>
               <div className="css" style={{textAlign: "center"}}>
                   <img src="https://skillicons.dev/icons?i=css" />  
                   <p className="skill_label">CSS</p>
               </div>
               <div className="javascript" style={{textAlign: "center"}}>
                   <img src="https://skillicons.dev/icons?i=js" />
                   <p className="skill_label">Javascript</p>
               </div>
               <div className="react" style={{textAlign: "center"}}>
                   <img src="https://skillicons.dev/icons?i=react" />
                   <p className="skill_label">React.js</p>
               </div>
            </div>
           
          </div>
          <div className="backend_skills_container">
            <h3 style={{textAlign: "center", alignSelf:'end'}}>Backend</h3>
         
              <div className="backend_lang">
                 <div className="node" style={{textAlign: "center"}}>
                    <img src="https://skillicons.dev/icons?i=nodejs" />
                    <p className="skill_label">Node.js</p>
                 </div>
                 <div className="express" style={{textAlign: "center"}}>
                    <img src="https://skillicons.dev/icons?i=express" />
                    <p className="skill_label">Express.js</p>
                 </div>
              </div>
          </div>
          <div className="database_skills_container">
            <h3 style={{textAlign: "center"}}>Database</h3>
            <div className="mongoDB" style={{textAlign: "center"}}>
                 <img src="https://skillicons.dev/icons?i=mongodb" />
                 <p className="skill_label">MongoDB</p>
              </div>
          </div>
          <div className="version_skills_container">
            <h3 style={{textAlign: "center"}}>Version Control</h3>
            <div className="version_control">
                 <div className="git" style={{textAlign: "center"}}>
                    <img src="https://skillicons.dev/icons?i=git" />
                    <p className="skill_label">Git</p>
                 </div>
                 <div className="github" style={{textAlign: "center"}}>
                    <img src="https://skillicons.dev/icons?i=github" />
                    <p className="skill_label">Github</p>
                 </div>
              </div>
          </div>
        </div>
       </div>
      
      </section>
    )
}

export default Skills;