import React from "react"

import sharedoc from "../images/graphics/sharedoc-img.png"

const ShareDoc = ({}) => {
    return(
    <section className="share-doc">
            <div className="sharedoc-left">
                <h2 className="sharedoc-heading">ShareDoc – Document management tool</h2>
                <p>Our payroll software also lets you share and exchange payroll related files in a secure and GDPR compliant manner. ShareDoc is designed to improve your document workflow, and makes it easy and secure to exchange, control, authorize and approve documents online.
                <br></br><br></br>
                <span>Features</span>
                <br></br>
                - Share hyperlinks to authorised external and internal stakeholders
                - Control, authorize, approve and reject documents online
                - GDPR conformity
                - E-mail notification to authorised users
                - Add users and control access based on need-to-know basis</p>
                <a href="mailto:info@internago.com" className="cta-btn">Try it today</a>
            </div>

            <div className="sharedoc-right">
            <img src={sharedoc} alt=""></img>
            </div>
    </section>

    )
}

export default ShareDoc