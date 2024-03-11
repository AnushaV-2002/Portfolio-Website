import React from "react";
import MyNavbar from "./MyNavbar";
import Header from "./Header";
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

function Home(){
    return(
        <>
          <MyNavbar aboutId="about" goalsId="goals" contactId="contact"/>
          <Header/>
          <About/>
          <Experience/>
          <Projects/>
          <Skills/>
          <Contact/>
          <Footer/>
          <ScrollToTopButton backgroundColor="#ff4d40"/>
        </>
    )
}

export default Home;