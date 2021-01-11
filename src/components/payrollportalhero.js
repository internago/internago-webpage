import React from "react"
import PayrollPortalImg from "../images/graphics/payroll-portal-img.png"

const PayrollPortalHero = ({}) => {  
    return (
      <section className="what-we-offer-hero">
        <div className="what-we-offer-hero-text">   
            <h1>Internago Payroll Portal</h1>
            <p>With Internago’s payroll portal you can cut costs and increase efficiency, while still having maximum control over your international payroll.<br></br>
            <br></br>
                Our international payroll software enables you to manage your payroll and HR in one place – online.</p>
            </div>
            <div className="what-we-offer-hero-graphic">
                <img alt="graphic illustration of a person sitting in front of a screen with the Internago payroll portal on it" src={PayrollPortalImg} className="what-we-offer-hero-img"></img>
            </div>
      </section>

    )
  }
  
  
  export default PayrollPortalHero