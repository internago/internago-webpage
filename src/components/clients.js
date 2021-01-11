import React from "react"

import Kitabsawti from '../images/logos/kitab-sawti.png'
import Benify from '../images/logos/benify.png'
import Dedicare from '../images/logos/dedicare.png'
import Rototilt from '../images/logos/rototilt.png'
import Enmacc from '../images/logos/enmacc.png'
import Sportamore from '../images/logos/sportamore.png'



const Clients = ({ }) => {
    return (
        <div className="clients"> 
           <div className="clients-img"><img src={Kitabsawti} alt="Kitab Sawti logo"></img></div>
            <div className="clients-img"><img src={Benify} alt="Benify logo"></img></div>
            <div className="clients-img"><img src={Dedicare} alt="Dedicare logo"></img></div>
            <div className="clients-img"><img src={Rototilt} alt="Rototilt logo"></img></div>
            <div className="clients-img"><img src={Enmacc} alt="Enmacc logo"></img></div >
            <div className="clients-img"><img src={Sportamore} alt="Sportamore logo"></img></div >

        
        
        </div>


    )
}





export default Clients