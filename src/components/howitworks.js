import React from "react"

import analyseimg from "../images/graphics/analyse-img.png"
import digitalizeimg from "../images/graphics/digitalise-img.png"
import optimizeimg from "../images/graphics/optimise-img.png"

const HowItWorks = () => {
    return (
        <section className="how-it-works-section">
            <h2>How it works</h2>
            <div className="analyse">
                <div className="graphic-img"><img src={analyseimg} alt="illustration of technical chaos" className="portal-img"></img></div>
                <div className="txt-block">
                    <h3>Analyse</h3>
                    <p>Edited Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div className="digitalize">
                <div className="graphic-img"><img src={digitalizeimg} alt="illustration of a keyboard and hands with different digitalised motives around it" className="portal-img"></img></div>
                <div className="txt-block">
                    <h3>Digitalize</h3>
                    <p>This is edited. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div className="optimize">
                <div className="graphic-img"><img src={optimizeimg} alt="illustration of three people representing different diagrams" className="portal-img"></img></div>
                <div className="txt-block">
                    <h3>Optimize</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>


        </section>
    )
}

export default HowItWorks
