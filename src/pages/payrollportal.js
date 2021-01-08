import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PayrollPortalHero from "../components/payrollportalhero"
import IntroSection from "../components/introsection"
import PayrollHRManagement from "../components/payrollHRmanagement"
import ShareDoc from "../components/sharedoc"
import Quotes from "../components/quotes"
import Markets from "../components/markets"
import CTA from "../components/cta"


const PayrollPortal = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    const payrollHeading = "Payroll & HR management"
    const payrollText1 = "Internago’s international payroll portal is the perfect tool for managing international payroll and HR related tasks in multiple subsidiaries."
    const payrollText2 = "Increase your control and efficiency by using our single online  interface for all your international employees."
    
    const quotesArray = [
      {
        quote: "The ShareDoc module greatly facilitates the sharing and management of payroll and accounting related files. A perfect tool for payroll management and various declarations to individuals and companies",
        author: "",
        company: ""
      }
    ]

    const marketsHeading = "International payroll services"
    const marketsText1 = "Payroll can be complex in an international context. Local rules and regulations, different employment contracts, taxes and severence pay are just some things that you need to get in place and that influence the cost of personnell."
    const marketsText2 = "We collaborate with the best local experts ensuring full compliance with local regulation."
    const marketsText3 = "Our payroll portal cut costs and increase efficiency, while still having maximum control over you international business, and allows you to manage your international payroll and HR in one place online."
    const marketsBtn = "Contact our payroll team"

    const ctaHeading = "What's next?"
    const ctaText = "A complete range of services to support your international business. We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions."
    const ctaBtn = "Contact us today"
  
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <PayrollPortalHero/>
        <IntroSection introHeading={payrollHeading} introText1={payrollText1} introText2={payrollText2}/>
        <PayrollHRManagement/>
        <ShareDoc/>
        <Quotes quotesArray={quotesArray}/>
        <Markets marketsHeading={marketsHeading} marketsText1={marketsText1} marketsText2={marketsText2} marketsText3={marketsText3} marketsBtn={marketsBtn}/>
        <CTA ctaHeading={ctaHeading} ctaText={ctaText} ctaBtn={ctaBtn}/>
      </Layout>
    )
  }
  
  export default PayrollPortal
  


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`