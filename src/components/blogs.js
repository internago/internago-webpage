import React from "react"
import { Link } from "gatsby"

const Hero = ({}) => {  
    return (
      <div>
          <div className="hero-left">
              <h1>International payroll – Local experts</h1>
              <p>We are strongly driven by technology and innovation and we constantly strive to make our customers life easier by reducing their administrative burden to a minimum with increased control by digitalization.</p>
              <button className='cta-btn'>Book a demo</button>
          </div>
            <div className="hero-graphic"> <img src={heroimg} className="hero-img" > </img> </div>
          
      </div>
    )
  }
  
  
  export default Hero