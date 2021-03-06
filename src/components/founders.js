import React from "react"

import vilhelm from "../images/graphics/vilhelm.png"
import robert from "../images/graphics/robert.png"
import kristofer from "../images/graphics/kristofer.png"


const Founders = () => {  

    return (
      <section className="founder-section">
          <h2>Meet our Co-Founders</h2>
            <div className="founder-cards-wrapper">

                <div className="founder-card">
                    <div className="founder-top-card">
                        <div className="img-wrapper"><img alt="graphic illustration of a portrait of Robert" src={robert}></img></div>
                        <h3>Robert Wentrup</h3>
                        <a href="mailto:robert.wentrup@internago.com">robert.wentrup@internago.com</a> 
                    </div>
                    <div className="founder-bottom-card">
                        <a href="https://www.linkedin.com/in/robert-wentrup-phd-2464551/">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.50908 0.00585938C2.03159 0.00585938 0.00390625 2.03349 0.00390625 4.51103V18.4914C0.00390625 20.9689 2.03154 22.9958 4.50908 22.9958H18.4894C20.9669 22.9958 22.9939 20.9689 22.9939 18.4914V4.51103C22.9939 2.03354 20.9669 0.00585938 18.4894 0.00585938H4.50908ZM5.6422 3.79966C6.8301 3.79966 7.5618 4.5795 7.58438 5.60459C7.58438 6.60704 6.83005 7.4088 5.61922 7.4088H5.59693C4.43164 7.4088 3.67846 6.60709 3.67846 5.60459C3.67846 4.57952 4.45443 3.79966 5.64217 3.79966H5.6422ZM15.879 8.59079C18.1636 8.59079 19.8762 10.084 19.8762 13.2928V19.2832H16.4043V13.6944C16.4043 12.2901 15.9018 11.3319 14.6453 11.3319C13.6861 11.3319 13.1144 11.9777 12.8634 12.6016C12.7717 12.8248 12.7491 13.1365 12.7491 13.4487V19.2832H9.27723C9.27723 19.2832 9.32279 9.81605 9.27723 8.83579H12.7499V10.3152C13.2112 9.60339 14.0365 8.59077 15.879 8.59077V8.59079ZM3.88325 8.83655H7.35517V19.2832H3.88325V8.83655V8.83655Z" fill="#00446E"/>
                            </svg>
                        </a>
                        <span className="founder-location">
                            <p>Paris, France</p>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.75 22.5046C10.1712 21.1579 8.70773 19.6815 7.375 18.0909C5.375 15.7021 3 12.1446 3 8.75464C2.99823 5.21407 5.13031 2.02138 8.40134 0.666387C11.6724 -0.688604 15.4376 0.061191 17.94 2.56589C19.5856 4.20415 20.5074 6.43263 20.5 8.75464C20.5 12.1446 18.125 15.7021 16.125 18.0909C14.7923 19.6815 13.3288 21.1579 11.75 22.5046ZM11.75 2.50464C8.29994 2.50877 5.50413 5.30457 5.5 8.75464C5.5 10.2121 6.15875 12.7359 9.29375 16.4871C10.0664 17.4097 10.8863 18.2917 11.75 19.1296C12.6138 18.2927 13.4341 17.412 14.2075 16.4909C17.3413 12.7346 18 10.2109 18 8.75464C17.9959 5.30457 15.2001 2.50877 11.75 2.50464ZM11.75 12.5046C9.67894 12.5046 8 10.8257 8 8.75464C8 6.68357 9.67894 5.00464 11.75 5.00464C13.8211 5.00464 15.5 6.68357 15.5 8.75464C15.5 9.7492 15.1049 10.703 14.4017 11.4063C13.6984 12.1096 12.7446 12.5046 11.75 12.5046Z" fill="#00446E"/>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="founder-card">
                    <div className="founder-top-card">
                        <div className="img-wrapper"><img alt="graphic illustration of a portrait of Vilhelm" src={vilhelm}></img></div>
                        <h3>Vilhelm Brag</h3>
                        <a href="mailto:vilhelm.brag@internago.com">vilhelm.brag@internago.com</a> 
                    </div>
                    <div className="founder-bottom-card">
                        <a href="https://www.linkedin.com/in/vilhelm-brag-b1299b3/">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.50908 0.00585938C2.03159 0.00585938 0.00390625 2.03349 0.00390625 4.51103V18.4914C0.00390625 20.9689 2.03154 22.9958 4.50908 22.9958H18.4894C20.9669 22.9958 22.9939 20.9689 22.9939 18.4914V4.51103C22.9939 2.03354 20.9669 0.00585938 18.4894 0.00585938H4.50908ZM5.6422 3.79966C6.8301 3.79966 7.5618 4.5795 7.58438 5.60459C7.58438 6.60704 6.83005 7.4088 5.61922 7.4088H5.59693C4.43164 7.4088 3.67846 6.60709 3.67846 5.60459C3.67846 4.57952 4.45443 3.79966 5.64217 3.79966H5.6422ZM15.879 8.59079C18.1636 8.59079 19.8762 10.084 19.8762 13.2928V19.2832H16.4043V13.6944C16.4043 12.2901 15.9018 11.3319 14.6453 11.3319C13.6861 11.3319 13.1144 11.9777 12.8634 12.6016C12.7717 12.8248 12.7491 13.1365 12.7491 13.4487V19.2832H9.27723C9.27723 19.2832 9.32279 9.81605 9.27723 8.83579H12.7499V10.3152C13.2112 9.60339 14.0365 8.59077 15.879 8.59077V8.59079ZM3.88325 8.83655H7.35517V19.2832H3.88325V8.83655V8.83655Z" fill="#00446E"/>
                            </svg>
                        </a>
                        <span className="founder-location">
                            <p>Stockholm, Sweden</p>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.75 22.5046C10.1712 21.1579 8.70773 19.6815 7.375 18.0909C5.375 15.7021 3 12.1446 3 8.75464C2.99823 5.21407 5.13031 2.02138 8.40134 0.666387C11.6724 -0.688604 15.4376 0.061191 17.94 2.56589C19.5856 4.20415 20.5074 6.43263 20.5 8.75464C20.5 12.1446 18.125 15.7021 16.125 18.0909C14.7923 19.6815 13.3288 21.1579 11.75 22.5046ZM11.75 2.50464C8.29994 2.50877 5.50413 5.30457 5.5 8.75464C5.5 10.2121 6.15875 12.7359 9.29375 16.4871C10.0664 17.4097 10.8863 18.2917 11.75 19.1296C12.6138 18.2927 13.4341 17.412 14.2075 16.4909C17.3413 12.7346 18 10.2109 18 8.75464C17.9959 5.30457 15.2001 2.50877 11.75 2.50464ZM11.75 12.5046C9.67894 12.5046 8 10.8257 8 8.75464C8 6.68357 9.67894 5.00464 11.75 5.00464C13.8211 5.00464 15.5 6.68357 15.5 8.75464C15.5 9.7492 15.1049 10.703 14.4017 11.4063C13.6984 12.1096 12.7446 12.5046 11.75 12.5046Z" fill="#00446E"/>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="founder-card">
                    <div className="founder-top-card">
                        <div className="img-wrapper"><img alt="graphic illustration of a portrait of Kristofer" src={kristofer}></img></div>
                        <h3>Kristofer Svartling</h3>
                        <a href="mailto:kristofer.svartling@internago.com">kristofer.svartling@internago.com</a> 
                    </div>
                    <div className="founder-bottom-card">
                        <a href="https://www.linkedin.com/in/kristofer-svartling-89405a4a/">
                            <svg className="linkedin-svg" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.50908 0.00585938C2.03159 0.00585938 0.00390625 2.03349 0.00390625 4.51103V18.4914C0.00390625 20.9689 2.03154 22.9958 4.50908 22.9958H18.4894C20.9669 22.9958 22.9939 20.9689 22.9939 18.4914V4.51103C22.9939 2.03354 20.9669 0.00585938 18.4894 0.00585938H4.50908ZM5.6422 3.79966C6.8301 3.79966 7.5618 4.5795 7.58438 5.60459C7.58438 6.60704 6.83005 7.4088 5.61922 7.4088H5.59693C4.43164 7.4088 3.67846 6.60709 3.67846 5.60459C3.67846 4.57952 4.45443 3.79966 5.64217 3.79966H5.6422ZM15.879 8.59079C18.1636 8.59079 19.8762 10.084 19.8762 13.2928V19.2832H16.4043V13.6944C16.4043 12.2901 15.9018 11.3319 14.6453 11.3319C13.6861 11.3319 13.1144 11.9777 12.8634 12.6016C12.7717 12.8248 12.7491 13.1365 12.7491 13.4487V19.2832H9.27723C9.27723 19.2832 9.32279 9.81605 9.27723 8.83579H12.7499V10.3152C13.2112 9.60339 14.0365 8.59077 15.879 8.59077V8.59079ZM3.88325 8.83655H7.35517V19.2832H3.88325V8.83655V8.83655Z" fill="#00446E"/>
                            </svg>
                        </a>
                        <span className="founder-location">
                            <p>Milano, Italy</p>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.75 22.5046C10.1712 21.1579 8.70773 19.6815 7.375 18.0909C5.375 15.7021 3 12.1446 3 8.75464C2.99823 5.21407 5.13031 2.02138 8.40134 0.666387C11.6724 -0.688604 15.4376 0.061191 17.94 2.56589C19.5856 4.20415 20.5074 6.43263 20.5 8.75464C20.5 12.1446 18.125 15.7021 16.125 18.0909C14.7923 19.6815 13.3288 21.1579 11.75 22.5046ZM11.75 2.50464C8.29994 2.50877 5.50413 5.30457 5.5 8.75464C5.5 10.2121 6.15875 12.7359 9.29375 16.4871C10.0664 17.4097 10.8863 18.2917 11.75 19.1296C12.6138 18.2927 13.4341 17.412 14.2075 16.4909C17.3413 12.7346 18 10.2109 18 8.75464C17.9959 5.30457 15.2001 2.50877 11.75 2.50464ZM11.75 12.5046C9.67894 12.5046 8 10.8257 8 8.75464C8 6.68357 9.67894 5.00464 11.75 5.00464C13.8211 5.00464 15.5 6.68357 15.5 8.75464C15.5 9.7492 15.1049 10.703 14.4017 11.4063C13.6984 12.1096 12.7446 12.5046 11.75 12.5046Z" fill="#00446E"/>
                            </svg>
                        </span>
                    </div>
                </div>

            </div>

      </section>
    )
  }
  
  
export default Founders