import React from "react"

const IntroSection = ({introHeading, introText}) => {  
    return (
      <section className="introduction-section">
            <div className="payroll-management-text">
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
      </section>
    )
  }
  
  
  export default IntroSection