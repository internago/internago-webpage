import React from "react"
import { Link } from "gatsby"

const CTA = ({heading, text, btn}) => {  
    return (
      <section className="cta-section">
          <div className="cta-wrapper">
            <h2>{heading}</h2>
            <p>{text}</p>
            <a href="mailto:info@internago.com" className="cta-btn">{btn}</a>
          </div>
      </section>
    )
  }
  
  
  export default CTA