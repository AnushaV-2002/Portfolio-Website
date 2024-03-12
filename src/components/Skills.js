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
               <div className="html">
                   <img className="imgHover" src={HTML} style={{width: "100px", height:"100px"}}/>
                   <p className="skill_label">HTML</p>
               </div>
               <div className="css">
                   <img className="imgHover" src={CSS} style={{width: "100px", height:"100px"}}/>
                   <p className="skill_label">CSS</p>
               </div>
               <div className="javascript">
                   <img className="imgHover" src={Javascript} style={{width: "100px", height:"100px"}}/>
                   <p className="skill_label">Javascript</p>
               </div>
               <div className="react">
                   <img className="imgHover" src={Reactpng} style={{width: "100px", height:"100px"}}/>
                   <p className="skill_label">React.js</p>
               </div>
            </div>
           
          </div>
          <div className="backend_skills_container">
            <h3 style={{textAlign: "center"}}>Backend</h3>
         
              <div className="backend_lang">
                 <div className="node">
                    <img className="imgHover" src={Node} style={{width: "100px", height:"100px"}}/>
                    <p className="skill_label">Node.js</p>
                 </div>
                 <div className="express">
                    <img className="imgHover" src={Express} style={{width: "155px", height:"90px"}}/>
                    <p className="skill_label">Express.js</p>
                 </div>
              </div>
              <div className="mongoDB">
                 <img className="imgHover" src={MongoDB} style={{width: "120px", height:"120px"}}/>
                 <p className="skill_label">MongoDB</p>
              </div>
          </div>
        </div>
       </div>
      
      </section>
    )
}

export default Skills;