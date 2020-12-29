import React from "react"
import { Link } from "gatsby"
import Payroll from "../images/graphics/payroll-img.png"
import servicesimg from "../images/graphics/services-img.png"

const Services = ({ }) => {
    return (
        <section className="services-homepage">
           <div className="services-up">
                <div className="portal-graphic"><img src={Payroll}></img></div>
               <div className="portal-text">
                    <h2>Internago Payroll portal – <br />  One software for all your payroll services</h2>
                   <p>Transfer, store and handle documents, payslips and more in a secure and GDPR compliant way with the Internago Payroll Portal. Share relevant information with your colleagues or clients and control access rights and passwords in a single online interface</p>
                   <a href="#" className="cta-btn">Read more</a>
               </div>
           </div>
           <div className="services-down">
               <div className="services-text">
                <h2>We make the complex simple</h2>
                <p>A complete range of services to support your international business.
We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions.</p>
                <a href="#" className="cta-btn">Read more</a>
              </div>
              <div className="services-graphic"><img src={servicesimg}></img></div>
           </div>
        </section>

        


    )
}








export default Services