import React from "react"
import { Link } from "gatsby"
import Globe from "../images/graphics/globe.png"

const Markets = ({ }) => {
    return (
        <section className="markets">
            <div className="markets-left"> 
            <h2>Your markets – our objective</h2>
                <p> Internago is currently delivering payroll services and related services on main European markets, both directly or together with well selected local partners.
Contact us to know more on how we can support you in France, Italy, Sweden, Germany, Spain, UK, Holland or other countries of interest. Contact our sales team to know more about our services.   </p>
            </div>
            <div className="markets-right"> 
            <img src={Globe}></img>
            </div>
         </section>

    )
}




export default Markets