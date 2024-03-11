import React from "react";
import '../css/footer.css'
import { HashLink as Link} from 'react-router-hash-link';

function Footer(){
    return(
        <>
          <div className="footer_container" style={{textAlign: "center"}}>
            <div className="footer_header" >
              <Link to="/#about" className="link_style">About | </Link>
              <Link to="/#experience"  className="link_style">Experience | </Link>
              <Link to="/#projects"  className="link_style">Projects | </Link>
              <Link to="/#skills"  className="link_style">Skills | </Link>
              <Link to="/#contact"  className="link_style">Contact Me</Link>
            </div>
            <div className="footer_copyright">
              <p>Copyright &copy; 2024 developed by Anusha Viswanathan</p>
            </div>
          </div>
        </>
    )
}

export default Footer;