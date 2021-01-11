import React from "react"
import ServicesImg from "../images/graphics/servicespage-img.png"

const ServicesHero = ({}) => {  
    return (
      <section className="what-we-offer-hero">
        <div className="what-we-offer-hero-text">   
            <h1>Internago Services</h1>
            <p>Whether you just started your company, or if you are interested to streamline your existing operations – Internago is your trusted partner</p>
            </div>
            <div className="what-we-offer-hero-graphic">
                <img alt="graphic illustration of two people coming out of their laptop screens shaking hands " src={ServicesImg} className="what-we-offer-hero-img"></img>
            </div>
      </section>

    )
  }
  
  
  export default ServicesHero