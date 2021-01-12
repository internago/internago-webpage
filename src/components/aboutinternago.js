import React from "react"

import Climbing from "../images/graphics/climbing-img.png"
import Complex from "../images/graphics/complex-img.png"




const AboutInternago = () => {
    return (
        <section className="internagoaboutus">
            <div className="about">
                
                <div className="internagoaboutimg">
                    <img src={Complex} alt="Illustration of three people representing different diagrams"></img>
            
                </div>

                <div className="internagoabout">
                    <p><span className="aboutfirstword">Internago</span> was founded with the objective to reduce administrative work and make your international business simple with increased control by digitalization.
                   <br /> <br />After working for many years handling the complexity that comes with international business, and running payroll services on foreign markets, we realized that a digital payroll portal to streamline the payroll was needed to make life easier for our customers.  </p>
                </div>
            </div>
            <div className="believe">
                
                <div className="internagobelieve">
                    
                    <p><span className="aboutfirstword">We believe</span> that payroll outsourcing can be simple and cost efficient through digitalization. <br /> <br />
                    This is why we developed the Internago Payroll Portal, which enables our customers to save time and keep control over their payroll on many markets from one digital interface.
                    <br /> <br />Working with Internago also means that you have one dedicated project manager that follows your business from the start and as it develops over time.
                    <br /> <br />Quality is also very important to us and where we don’t deliver through our own payroll, we collaborate with the best and carefully selected local partners to ensure that our customers follow all local regulations. </p>
                    
                </div>
                
                <div className="internagobelieveimg">
                    <img src={Climbing} alt="Illustration of three people climbing a latter"></img>
                </div>
                
            </div>

        </section>



    )
}

export default AboutInternago