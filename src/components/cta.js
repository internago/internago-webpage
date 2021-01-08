import React from "react"

const CTA = ({ctaHeading, ctaText, ctaBtn}) => {  
    return (
      <section className="cta-section">
          <div className="cta-wrapper">
            <h2>{ctaHeading}</h2>
            <p>{ctaText}</p>
            <a href="mailto:info@internago.com" className="cta-btn">{ctaBtn}</a>
          </div>
      </section>
    )
  }
  
  
export default CTA