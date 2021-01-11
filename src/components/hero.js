import React from "react"
import { Link } from "gatsby"
import heroimg from "../images/graphics/hero-img.png"

const Hero = ({}) => {  
    return (
      <div className="hero">
          <div className="hero-left">
             
          <h1>International payroll – <br /> Local experts</h1>
              <p>We are strongly driven by technology and innovation and we constantly strive to make our customers life easier by reducing their administrative burden to a minimum with increased control by digitalization.</p>
                <a href="mailto:info@internago.com" className="cta-btn">Book a demo</a> 
          <div className="contactus-btn"><a href="mailto:info@internago.com" className="neutral-btn">Contact us</a></div>

              
          </div>
            <div className="hero-graphic"><img src={heroimg} alt="illustration of a calm smart woman working with internago and in the background is a stressed man drowning in administrative work" className="hero-img"></img>
          </div>  
      </div>
    )
  }
  
  
  export default Hero