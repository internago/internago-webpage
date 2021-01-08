import React from "react"

const IntroSection = ({introHeading, introText1, introText2}) => {  
    return (
      <section className="introduction-section">
                <h2>{introHeading}</h2>
                <p>{introText1}</p>
                <p>{introText2}</p>
      </section>
    )
  }
  
  
  export default IntroSection