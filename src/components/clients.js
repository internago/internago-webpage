import React from "react"
import { Link } from "gatsby"
import Kitabsawti from '../images/logos/kitab-sawti.png'
import Benify from '../images/logos/benify.png'
import Dedicare from '../images/logos/dedicare.png'
import Rototilt from '../images/logos/rototilt.png'
import Enmacc from '../images/logos/enmacc.png'
import Sportamore from '../images/logos/sportamore.png'



const Clients = ({ }) => {
    return (
        <div className="clients"> 
           <div className="clients-img"> <img src={Kitabsawti}></img></div>
            <div className="clients-img"><img src={Benify}></img></div>
            <div className="clients-img"> <img src={Dedicare}></img></div>
            <div className="clients-img"> <img src={Rototilt}></img></div>
            <div className="clients-img"> <img src={Enmacc}></img></div >
            <div className="clients-img"> <img src={Sportamore}></img></div >

        
        
        </div>


    )
}





export default Clients