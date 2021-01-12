import React from "react"
import About from "../images/graphics/about-img.png"

const AboutHero = () => {
    return (
        <section className="what-we-offer-hero">
            <div className="what-we-offer-hero-text">
                <h1>International payroll - <br/>Local experts</h1>
                <p>We are strongly driven by technology and innovation and we constantly strive to make our customers life easier by reducing their administrative burden to a minimum.</p>
            </div>
            <div className="what-we-offer-hero-graphic">
                <img src={About}></img>
            </div>
        </section>

    )
}


export default AboutHero