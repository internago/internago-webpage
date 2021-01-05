import React from "react"
import { Link } from "gatsby"

import analyseimg from "../images/graphics/analyse-img.png"
import digitalizeimg from "../images/graphics/digitalise-img.png"
import optimizeimg from "../images/graphics/optimise-img.png"

const HowItWorks = ({}) => {
    return (
        <section className="how-it-works-section">
            <h2>How it works</h2>
            <div className="analyse">
                <div className="graphic-img"><img src={analyseimg} className="portal-img"></img></div>
                <div className="txt-block">
                    <h3>Analyse</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div className="digitalize">
                <div className="graphic-img"><img src={digitalizeimg} className="portal-img"></img></div>
                <div className="txt-block">
                    <h3>Digitalize</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div className="optimize">
                <div className="graphic-img"><img src={optimizeimg} className="portal-img"></img></div>
                <div className="txt-block">
                    <h3>Optimize</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>


        </section>
    )
}

export default HowItWorks