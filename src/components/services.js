import React from "react"
import { Link } from "gatsby"
import Payroll from "../images/graphics/payroll-img.png"

const Services = ({ }) => {
    return (
        <section className="services-homepage">
           <div className="services-up">
                <div className="portal-graphic"> <img src={Payroll}></img> </div>
               <div className="portal-text">
                   <h2>Internago Payroll portal – one software for all your payroll services</h2>
                   <p>Transfer, store and handle documents, payslips and more in a secure and GDPR compliant way with the Internago Payroll Portal. Share relevant information with your colleagues or clients and control access rights and passwords in a single online interface</p>
                   <button className="cta-btn">Read more</button>
               </div>
           </div>
           <div className="services-down"> </div>
        </section>

        


    )
}








export default Services