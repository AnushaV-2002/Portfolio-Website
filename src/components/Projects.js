import React from "react";
import "../css/projects.css"
import { useState } from "react";
import ProManageHub from "../images/ProManageHub.png";
import Portfolio from "../images/Portfolio.png";
import GoogleFirebase from "../images/Google_firebase.png";
import ConnectingTheDots from "../images/Connecting_The_Dots.png";
import HackOHolics from "../images/Hack-o-Holics.png";
import CopyToClipboard from "../images/Copy-to-Clipboard.png";
import DigitalClock from "../images/Digital_Clock.png";
import Calculator from "../images/Calculator.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Projects(){

  const[projects,setProjects] = useState([
    {
      "Project_Thumbnail" : ProManageHub,
      "Project_Title" : "ProManageHub",
      "Project_Description": "Streamline project management with our intuitive app, enabling developers to effortlessly organize, update, and delete project details. Stay focused and boost productivity with our user-friendly platform designed for seamless project management.",
      "Project_Github": "https://github.com/AnushaV-2002/ProManageHub",
      "Project_Blog": null,
      "Project_Demo": "https://promanagehub.vercel.app/",
      "Project_Video_Demo": null
    },
    {
      "Project_Thumbnail" : Portfolio,
      "Project_Title" : "Portfolio Website",
      "Project_Description": "Dynamic Portfolio Website Showcasing My Skills, Projects, and Achievements in the Realm of Technology. Explore My Work, Experience, and Accomplishments to Get a Glimpse of My Expertise and Passion for Innovation.",
      "Project_Github": "https://github.com/AnushaV-2002/Portfolio_Website",
      "Project_Blog": null,
      "Project_Demo": "https://anusha_viswanathan.vercel.app/",
      "Project_Video_Demo": null
    },
    {
      "Project_Thumbnail" : GoogleFirebase,
      "Project_Title" : "Host a Static Website using Google Firebase",
      "Project_Description": "Google Firebase: Effortlessly deploy and manage your static website with Firebase hosting. Enjoy seamless performance and scalability for your projects.",
      "Project_Github": null,
      "Project_Blog": "https://medium.com/@anushaviswanathan/unlocking-the-power-of-google-firebase-for-frontend-developers-150104eaedac",
      "Project_Demo": "https://frontend-apps-ab53f.web.app/",
      "Project_Video_Demo": null
    },
    {
      "Project_Thumbnail" : ConnectingTheDots,
      "Project_Title" : "Connecting The Dots",
      "Project_Description": "I spearheaded the development of the IEEE Madras Section Women in Engineering (WIE) website for the 'Connecting the Dots' event. It promotes awareness about WIE activities, women in tech, and leadership, fostering interaction and inspiration for future women engineers in the IEEE Madras Section.",
      "Project_Github": "https://github.com/AnushaV-2002/Connecting_The_Dots",
      "Project_Blog": null,
      "Project_Demo": null,
      "Project_Video_Demo": "https://drive/connecting.com"
    },
    {
      "Project_Thumbnail" : HackOHolics,
      "Project_Title" : "Hack-O-Holics",
      "Project_Description": "I took the lead in crafting the Hack-O-Holics event website, an initiative under our college's IEEE organization. This platform empowers aspiring innovators to address real-world issues, fostering a culture of creativity and problem-solving within our community.",
      "Project_Github": "https://github.com/AnushaV-2002/Hack-O-Holics-2.0",
      "Project_Blog": null,
      "Project_Demo": "https://hack-o-holics.netlify.app/",
      "Project_Video_Demo": null
    },
    {
      "Project_Thumbnail" : CopyToClipboard,
      "Project_Title" : "Copy-To-Clipboard",
      "Project_Description": "I developed a 'Copy to Clipboard' feature using HTML, CSS, and JavaScript. This implementation enables users to easily copy text with just one click. The interface is intuitive and seamlessly integrates into web applications or websites, enhancing user experience and functionality.",
      "Project_Github": "https://github.com/AnushaV-2002/Copy-To-Clipboard",
      "Project_Demo": "https://copy-to-clipboard-js.netlify.app/",
      "Project_Video_Demo": null
    },
    {
      "Project_Thumbnail" : DigitalClock,
      "Project_Title" : "Digital Clock",
      "Project_Description": "I created a sleek digital clock with HTML, CSS, and JavaScript. Its clean design elegantly displays the current time, perfect for web pages or standalone use.",
      "Project_Github": "https://github.com/AnushaV-2002/Digital-Clock",
      "Project_Demo": "https://digital-clock-js-project1.netlify.app/",
      "Project_Video_Demo": null
    },
    {
      "Project_Thumbnail" : Calculator,
      "Project_Title" : "Simple Calculator",
      "Project_Description": "I developed a user-friendly basic calculator using HTML, CSS, and JavaScript. It supports addition, subtraction, multiplication, and division, offering convenient functionality for quick calculations on web pages or as a standalone application.",
      "Project_Github": "https://github.com/AnushaV-2002/Simple-Calculator",
      "Project_Demo": "https://calculator-js-30days-challenge.netlify.app/",
      "Project_Video_Demo": null
    }
  ])
   




    return(
      <section id="projects">
      <div className="projects_container">
      <h2 className="projects_heading">Projects</h2>
      <div className="projects_cards">
        {projects.map((project, index) => (
          <Card style={{ width: '18rem', paddingBottom:"1em", backgroundColor: "#e2dfd2" }} key={index}>
            <Card.Img variant="top" src={project.Project_Thumbnail} />
            <Card.Body>
              <Card.Title style={{fontWeight: "bold"}}>{project.Project_Title}</Card.Title>
              <Card.Text style={{textAlign: "justify", hyphens: 'auto'}}>
                {project.Project_Description}
              </Card.Text>
            </Card.Body>
            <div className="button_section">
                {project.Project_Github ? (
                  <Button style={{backgroundColor:"#faf9f6", color: "black", border:"none"}} href={projects.Project_Github} target="_blank">GitHub Link</Button>
                ) : (
                  <Button style={{backgroundColor:"#faf9f6", color: "black", border:"none"}} href={project.Project_Blog} target="_blank">Blog Link</Button>
                )}
                {project.Project_Demo ? (
                  <Button style={{backgroundColor:"#faf9f6", color: "black", border:"none"}} href={project.Project_Demo} target="_blank">Visit Website</Button>
                ) : (
                  <Button style={{backgroundColor:"#faf9f6", color: "black", border:"none"}} href={project.Project_Video_Demo} target="_blank">Video Demo</Button>
                )}
                
                
              </div>
          </Card>
        ))}
      </div>
    </div>
    
    </section>
    )
}

export default Projects;