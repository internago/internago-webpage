import React from "react"

import mobileicon from "../images/icons/mobile.png"
import handicon from "../images/icons/hand.png"
import moneyicon from "../images/icons/money.png"
import clockicon from "../images/icons/clock.png"
import speechbubblesicon from "../images/icons/speechbubbles.png"
import acceptdeclineicon from "../images/icons/acceptdecline.png"
import calendericon from "../images/icons/calender.png"

const PayrollHRManagement = ({}) => {
    return (
        <section className="payroll-management">
            <div className="payroll-management-cards-wrapper">
                    <div className="payroll-icon-card">
                    <img src={mobileicon}></img>
                        <p>Mobile device login</p>
                    </div>
                    <div className="payroll-icon-card">
                        <img src={handicon}></img>
                        <p>Simple to use</p>
                    </div>
                    <div className="payroll-icon-card">
                        <img src={moneyicon}></img>
                        <p>Expense management</p>
                    </div>
                    <div className="payroll-icon-card">
                        <img src={clockicon}></img>
                        <p>Real time notification</p>
                    </div>
                    <div className="payroll-icon-card">
                        <img src={speechbubblesicon}></img>
                        <p>Multi language</p>
                    </div>
                    <div className="payroll-icon-card">
                        <img src={acceptdeclineicon}></img>
                        <p>Accept/decline workflow, configurable for enabling multiple approvers</p>
                    </div>
                    <div className="payroll-icon-card">
                        <img src={calendericon}></img>
                        <p>Absence and time management </p>
                    </div>
             </div>

             <div className="payroll-management-cta"><a href="mailto:info@internago.com" className="cta-btn">Request a demo</a></div>
        </section>
    )
}

export default PayrollHRManagement