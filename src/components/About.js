import React from "react";
import "../css/about.css"
import Image from "../images/About_Headshot.jpg"

function About(){

  const resume_btn =  `https://drive.google.com/file/d/1pjlaElyz_yscXBkgI1vsZVeQLpHzkyTo/view?usp=sharing`;
 

    return(
      <section id="about">
          <div className="about_me_container">
            <h2 className="about_me_heading">About Me</h2>
            <div className="about_me_content">
              <img className="about_img" src={Image}/>
              <div className="about_me_description">
                <p className="about_me">
                   I'm Anusha, an Information technology graduate, deeply passionate about Web development and Cloud computing. Proficient in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I contributed as a freelance technical content writer at Scaler Academy. Here, I transformed complex tech concepts into engaging blog posts. Additionally, I worked as a web designer at Connecting the Dots, focusing on crafting intuitive user interfaces and maintaining clean code practices. As an active member of IEEE, I have organized workshops, webinars, and hackathons, earning recognition with the IEEE Computer Society’s Richard E. Merwin Scholarship for my significant volunteering contributions.
                </p>
                <a href={resume_btn} target="_blank" rel="noopener noreferrer">
                  <button className="resume_btn" style={{ fontWeight: "bold" }}>
                     Download CV or Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
      </section>
    )
}

export default About;