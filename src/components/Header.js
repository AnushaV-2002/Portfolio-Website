import React from "react";
import "../css/header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "../images/Headshot.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Header() {
  const [typeEffect] = useTypewriter({
    words: ["Full Stack Developer", "Public Speaker", "Volunteer", "Mentor", "Blogger"],
    loop: {},
    cursor: true,
    cursorSpeed: 400,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const clickable_btns = {
    github: `https://github.com/AnushaV-2002`,
    linkedIn: `https://www.linkedin.com/in/anushaviswanathan/`,
    resume: `https://drive.google.com/file/d/1pjlaElyz_yscXBkgI1vsZVeQLpHzkyTo/view?usp=sharing`,
  };

  return (
  
    <div className="header_container">
      <div className="portfolio_details">
        <h1 className="portfolio_name">Hi, I am Anusha</h1>
        <h3 className="portfolio_role">
          I am a <span className="portfolio_span">{typeEffect}<Cursor cursorColor="white" /></span>
        </h3>
        <p className="portfolio_description display">
          As a versatile full-stack developer, I blend creativity and innovation
          with expertise in HTML, CSS, JavaScript, React, Node.js, Express, and
          MongoDB. Passionate about crafting immersive user experiences and
          solving problems, I aim to create cutting-edge solutions tailored to
          diverse industry needs, while continuously refining my skills and
          embracing new challenges.
        </p>
        <div className="social_media">
          <div className="social_media_links">
            <button className="clickable_btns">
              
              <a
                href={clickable_btns.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#333333" }}
              >
                <FaGithub className="github" size={32} />
              </a>
            </button>
            <button className="clickable_btns">
            
              <a
                href={clickable_btns.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#333333" }}
              >
                <FaLinkedin className="linkedIn" size={32} />
              </a>
            </button>
          </div>
          <a
            href={clickable_btns.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="clickable_btns" style={{ fontWeight: "bold" }}>
              Download CV or Resume
            </button>
          </a>
        </div>
      </div>
      <div className="portfolio_picture">
        <img className="portfolio_image" src={Image} />
      </div>
    </div>
    
  );
}

export default Header;
