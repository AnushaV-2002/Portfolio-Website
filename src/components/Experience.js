import React from "react";
import '../css/experience.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function Experience(){
    return(
      <section id="experience">
      <div className="timeline-section" id="timeline">
         <h2>Experience</h2>
         <div className="timeline-items">
             <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">May 2022 - Present</div>
                {/* <div className="timeline-content"> */}
                <Accordion>
                  <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Freelance Technical Content Writer @ Scaler Academy
                  </Accordion.Header>
                  <Accordion.Body>
                  <ul style={{textAlign: "justify"}}>
                   <li>Created engaging and informative blog posts on topics related to HTML, CSS, and JavaScript.</li>
                   <li>Simplified complex concepts to be easily understandable for readers with varying levels of expertise.</li>
                  </ul>
                  </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* </div> */}
             </div>
             <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">Oct 2021 – Dec 2021</div>
                <Accordion>
                  <Accordion.Item eventKey="0">
                  <Accordion.Header>
                   Web Designer @ Connecting the Dots, IEEE WIE AG MAS
                  </Accordion.Header>
                  <Accordion.Body>
                  <ul style={{textAlign: "justify"}}>
                   <li>Developed a Website for Connecting the Dots event organized by IEEE MAS AG WIE using the technologies such as HTML, CSS and JavaScript.</li>
                   <li>Designed and developed visually appealing and userfriendly web interfaces, with maintainable code enhancing in terms of functionality and performance.</li>
                  </ul>
                  </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
             </div>
         </div>
      </div>
      </section>
    )
}

export default Experience;