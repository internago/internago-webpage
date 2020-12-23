import React from "react"
import { Link } from "gatsby"
import waveimg from "../images/graphics/wave.png"

const CTA = ({heading, text, btn}) => {  
    return (
      <section className="cta-section">
          <h2>{heading}</h2>
          <p>{text}</p>
          <a href="mailto:info@internago.com" className="cta-btn">{btn}</a>
      </section>
    )
  }
  
  
  export default CTA