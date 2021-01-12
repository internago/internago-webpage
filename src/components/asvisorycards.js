import React from "react"

import Handshake from "../images/icons/handshake.png"
import Legal from "../images/icons/legal.png"
import Diagram from "../images/icons/diagram.png"

const AdvisoryCards = () => {  
    return (
      <section className="advisory-cards-wrapper">
          <div className="advisory-card">
              <div className="advisory-card-img-wrapper"><img alt="icon of two shaking hands" src={Handshake}></img></div>
              <div>
                <h3>Business Advisory</h3>
                <ul>
                    <li>Business potential</li>
                    <li>Identify growth opportunities</li>
                    <li>Set up and manage business partners / customers</li>
                    <li>Business development and implementation</li>
                </ul>
              </div>
          </div>
          <div className="advisory-card">
              <div className="advisory-card-img-wrapper"><img alt="icon of a scale" src={Legal}></img></div>
              <div>
                <h3>Legal Advisory</h3>
                <ul>
                        <li>Tender support</li>
                        <li>Check-up prior to due diligence</li>
                        <li>VAT registration</li>
                        <li>GDPR compliance</li>
                        <li>B2B contacts</li>
                        <li>Close down subsidiary or branch</li>
                </ul>
              </div>
          </div>
          <div className="advisory-card">
              <div className="advisory-card-img-wrapper"><img alt="icon displaying a diagram" src={Diagram}></img></div>
              <div>
                <h3>Analysis and assessments</h3>
                <ul>
                        <li>Pre-market entry analysis</li>
                        <li>Supplier benchmarking</li>
                        <li>Market positioning</li>
                        <li>Competitor analysis</li>
                        <li>Internationalization assessment</li>
                </ul>
              </div>
          </div>
      </section>
    )
  }
  
  
  export default AdvisoryCards