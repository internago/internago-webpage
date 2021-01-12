import React from "react"
import Climbing from "../images/graphics/climbing-img.png"
import Complex from "../images/graphics/complex-img.png"


const Advisoryincorp = () => {
    return (
        <section className="advisoryincorp">
 <div className="complex">
        <div className="complexleft">
            <h2 className="complexheading">We make the complex simple</h2>
            <p>Our consultants have solid experience from supporting companies in their business development on international markets. We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions. We work close with our clients in a transparent and efficient manner where your success as our objective.</p>
        </div>
        
        <div className="complexright"> 
            <img src={Complex} alt="Illustration of three people representing different diagrams"></img>
        </div>
</div>
<div className="professionals">
 <div className="professionalsleft"> 
    <img alt="graphic illustration of a person climbing up a ladder exploring new grounds with a flag in his hand and three people below cheering for him" src={Climbing}></img>
 </div>
        <div className="professionalsright"> 
            <h2 className="professionalsheading">Experienced professional</h2> 
            <p>Setting up a new company, whether it is in your home country, or if you are taking a step into an international market, is an important process where many important decisions must be made. <br/> <br/>
            Internago collaborates with a team of legal and tax professionals in all countries where we operate. We make sure that you get the best advice on how to set  up yo ur new entity.<br/><br/>
            All steps regarding company form, ownership, management, board of directors and fiscal set-up will be discussed and agreed together with your team.        Internago will walk you through what you need to have in place to be operational and can support you in setting up bank accounts, accounting and payroll.</p>
        </div>
 </div>

</section>



    )
}

export default Advisoryincorp