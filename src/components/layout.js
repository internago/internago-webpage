import React from "react"
import { Link } from "gatsby"

import Logo from '../images/logos/internago.png'


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let menuDisplayed = false


  //Functions
  function toggleMenu() {
    if (menuDisplayed){
      slideOutMenu()
      crossToHamburger()
      menuDisplayed = false
    } else {
      slideInMenu()
      hamburgerToCross()
      menuDisplayed = true
    }
  }

  function hamburgerToCross() {
    setTimeout(() => {
        document.querySelector(".line1").style.transform = "translateY(13px) rotate(45deg)";
        document.querySelector(".line2").style.opacity = "0";
        document.querySelector(".line3").style.transform = "translateY(-13px) rotate(-45deg)";
    }, 900);
    document.querySelector(".line1").style.animation = "line1ToCross 0.9s";
    document.querySelector(".line2").style.animation = "line2ToCross 0.9s";
    document.querySelector(".line3").style.animation = "line3ToCross 0.9s";
}


function crossToHamburger() {
    setTimeout(() => {
        document.querySelector(".line1").style.transform = "translateY(0px) rotate(0deg)";
        document.querySelector(".line2").style.opacity = "1";
        document.querySelector(".line3").style.transform = "translateY(0px) rotate(0deg)";
    }, 900);
    document.querySelector(".line1").style.animation = "line1ToHamburger 0.9s";
    document.querySelector(".line2").style.animation = "line2ToHamburger 0.9s";
    document.querySelector(".line3").style.animation = "line3ToHamburger 0.9s";
}

function slideOutMenu() {
    document.querySelector(".mobile-menu").style.width = "0"
    document.querySelector(".mobile-menu").style.padding = "var(--small-gap) 0";
}

function slideInMenu() {
    document.querySelector(".mobile-menu").style.width = "200px"
    document.querySelector(".mobile-menu").style.padding = "var(--small-gap)"
}


  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
    }
  
  

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>

      
      <nav className="main-nav">
        <a href="/"><img src={Logo} alt="logo of internago" className='internago-img'></img></a>
            <ul className="hamburger-menu" onClick={toggleMenu}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </ul>
            <ul className="mobile-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/payrollportal">Payroll Portal</a></li>
              <li><a href="/servicespage">Services</a></li>
              <li><a href="/blog?filter=all">Blog and News</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="mailto:info@internago.com">Contact us</a></li>
              <li><a href="mailto:info@internago.com">Book a demo</a></li>
            </ul> 

            <ul className="desktop-menu">
              <li><a href="/">Home</a></li>
              <ul className="what-we-offer">
                <li className="what-we-offer-listitem">What we offer
                  <svg className="toggle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.51465 8.4652L11.9996 16.9502L20.4846 8.4652L19.0706 7.0502L11.9996 14.1222L4.92865 7.0502L3.51465 8.4652Z" fill="#00446E"/></svg>
                </li>
                <ul className="what-we-offer-submenu">
                  <li><a href="/payrollportal">Payroll Portal</a></li>
                  <li><a href="/servicespage">Services</a></li>
                </ul>
              </ul>
              <li><a href="/blog?filter=all">Blog and News</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="mailto:info@internago.com" className="neutral-btn btn">Contact us</a></li>
              <li><a href="mailto:info@internago.com" className="cta-btn btn">Book a demo</a></li>
            </ul> 
      </nav>



      <main>{children}</main>

      <footer>
        <div className="footer-left">
          <img src={Logo} alt="logo of internago" className="internago-img"></img>
          <div className="bottom-left">
            <div className="footer-icons">
              <a href="https://twitter.com/Interna_GO">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.1592 9.75336C30.4665 8.97182 31.4446 7.7412 31.911 6.29127C30.6826 7.02015 29.3386 7.53359 27.9371 7.8094C25.994 5.75392 22.9153 5.25371 20.4214 6.58827C17.9275 7.92284 16.6357 10.7618 17.2679 13.5188C12.2361 13.2662 7.54806 10.8893 4.3704 6.97961C2.71204 9.84001 3.5595 13.4966 6.30707 15.3359C5.31352 15.3039 4.34201 15.0349 3.47353 14.5513C3.47353 14.5775 3.47353 14.6038 3.47353 14.63C3.4741 17.6096 5.57407 20.1762 8.49457 20.7667C7.573 21.0174 6.60633 21.0543 5.66832 20.8746C6.48965 23.4227 8.83808 25.1684 11.5148 25.2204C9.29787 26.9604 6.56006 27.904 3.74186 27.8994C3.24234 27.9001 2.74321 27.8714 2.24707 27.8134C5.10889 29.6524 8.43969 30.6285 11.8414 30.625C16.5741 30.6575 21.1223 28.7918 24.4688 25.4451C27.8152 22.0983 29.6806 17.55 29.6477 12.8173C29.6477 12.5461 29.6414 12.2763 29.6287 12.0079C30.8544 11.1222 31.9122 10.0248 32.7525 8.76752C31.6106 9.27366 30.3994 9.60595 29.1592 9.75336Z" fill="#00446E"/>
              </svg>
            </a>
              <a href="https://www.linkedin.com/company/internago-ab/">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.9583 30.625H13.125V13.125H18.9583V16.0417C20.2018 14.4597 22.0874 13.5167 24.099 13.4706C27.7165 13.4907 30.6355 16.4345 30.625 20.0521V30.625H24.7917V20.7812C24.5584 19.1517 23.1609 17.9427 21.5148 17.9462C20.7948 17.969 20.1151 18.2843 19.6327 18.8192C19.1503 19.3542 18.9068 20.0627 18.9583 20.7812V30.625ZM10.2083 30.625H4.375V13.125H10.2083V21.875V30.625ZM7.29167 10.2083C5.68084 10.2083 4.375 8.9025 4.375 7.29167C4.375 5.68084 5.68084 4.375 7.29167 4.375C8.9025 4.375 10.2083 5.68084 10.2083 7.29167C10.2083 8.06521 9.90104 8.80708 9.35406 9.35406C8.80708 9.90104 8.06521 10.2083 7.29167 10.2083Z" fill="#00446E" />
              </svg>
            </a>
          </div>
            <p className="copyright-text">
              Copyright © 2017-2019 All rights reserved to Internago AB. Contact: info@internago.com<br/>Disclaimer: Communication between you and Internago are protected by our Data Protection Policy , but your communication between our partners or lawyers is not. Internago provides access to independent lawyers and other requested partners to fulfil its service. We are not a law firm or a substitute for an attorney or law firm. We cannot provide any kind of advice, explanation, opinion, or recommendation about possible legal rights, remedies, options, or selection of forms or strategies. Your access to the website is subject to our Terms &amp; Conditions.
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p>Internago Sweden<br/>Tegelbacken 4A<br/>111 52 Stockholm<br/>Sweden</p>
          <p>Internago France<br/>39, Av. Pierre 1er de Serbie<br/>75008 Paris<br/>France</p>
          <p>Internago Italy<br/>Corso Vercelli, 57<br/>20144 Milano<br/>Italy</p>
        </div>
      </footer>
      </div>
    
  )
}


export default Layout
