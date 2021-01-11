import React from "react"

import earth from "../images/icons/earth.png"
import dollarcalender from "../images/icons/dollarcalender.png"
import protocol from "../images/icons/protocol.png"
import tax from "../images/icons/tax.png"
import accounting from "../images/icons/accounting.png"

const AccountingIcons = ({}) => {
    return (
        <section className="accounting-icons">
            <div className="accounting-icons-wrapper">
                    <div className="accounting-icon-box">
                    <img alt="icon of a globe" src={earth}></img>
                        <p>Local teams of accountants ensuring compliance to local regulation</p>
                    </div>
                    <div className="accounting-icon-box">
                        <img alt="icon showing a dollarsign in the corner" src={dollarcalender}></img>
                        <p>Montly financial reporting in format according to company’s needs</p>
                    </div>
                    <div className="accounting-icon-box">
                        <img alt="icon with a protocol" src={protocol}></img>
                        <p>Technical adaptbility to specific reporting format</p>
                    </div>
                    <div className="accounting-icon-box">
                        <img alt="icon showing two papers with VAT headline on them" src={tax}></img>
                        <p>Tax and VAT filing</p>
                    </div>
                    <div className="accounting-icon-box">
                        <img alt="icon showing two hands holding a circle with a calculator, a diagram and a scale in it" src={accounting}></img>
                        <p>Advisory of any accounting, legal or financial queries</p>
                    </div>
             </div>

             <div className="accounting-icons-cta"><a href="mailto:info@internago.com" className="cta-btn">Ask for a quote</a></div>
        </section>
    )
}

export default AccountingIcons