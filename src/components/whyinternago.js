import React from "react"

import globeicon from "../images/icons/globe.png"
import cloudicon from "../images/icons/cloud.png"
import safeicon from "../images/icons/safe.png"
import calendericon from "../images/icons/calender.png"
import paperstackicon from "../images/icons/paperstack.png"
import diagramicon from "../images/icons/diagram.png"


const WhyInternago = () => {
    return (
        <section className="why-internago">
            <h2>Why Internago?</h2>
            <div className="why-internago-cards-wrapper">
                <div className="icon-card">
                   <img src={globeicon} alt="illustration of a globe"></img>
                    <p>Access and share all you information with one online interface</p>
                </div>
                <div className="icon-card">
                    <img src={cloudicon} alt="illustration of a cloud with three employees in it"></img>
                    <p>Set up, store and update employee contracts through our cloudbased solution</p>
                </div>
                <div className="icon-card">
                    <img src={safeicon} alt="illustration of a safe with arrows in the background"></img>
                    <p>Transfer data in a safe, secure and GDPR certified manner</p>
                </div>
                <div className="icon-card">
                    <img src={calendericon} alt="illustration of a calendar"></img>
                    <p>Access montly reports from your subsidiaries each month</p>
                </div>
                <div className="icon-card">
                    <img src={paperstackicon} alt="illustration of a stack of papers"></img>
                    <p>We take care of all your administrative needs</p>
                </div>
                <div className="icon-card">
                    <img src={diagramicon} alt="illustration of a diagram"></img>
                    <p>Instant overview of payslips, salaries and monthly costs in easy-to-access diagrams </p>
                </div>

         </div>

        </section>

    )

}


export default WhyInternago