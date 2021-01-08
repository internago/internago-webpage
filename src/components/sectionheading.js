import React from "react"
import { Link } from "gatsby"

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