import React from "react"
import Globe from "../images/graphics/globe.png"

const Markets = ({marketsHeading, marketsText1, marketsText2, marketsText3, marketsBtn}) => {
    return (
        <section className="markets">
            <div className="markets-container">
                <div className="markets-left"> 
                    <h2 className="markets-heading">{marketsHeading}</h2>
                    <p>{marketsText1}</p>
                    <p>{marketsText2}</p>
                    <p>{marketsText3}</p>
                    <a href="mailto:info@internago.com" className="cta-btn">{marketsBtn}</a> 
                </div>
                <div className="markets-right"> 
                <img src={Globe} alt="illustration of a globe showing where internago is operating"></img>
                </div>
            </div>
        </section>
    )
}




export default Markets