import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PayrollPortalHero from "../components/payrollportalhero"
import PayrollHRManagement from "../components/payrollHRmanagement"
import CTA from "../components/cta"


const PayrollPortal = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    const ctaHeading = "What's next?"
    const ctaText = "A complete range of services to support your international business. We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions."
    const ctaBtn = "Contact us today"
  
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <PayrollPortalHero/>
        <PayrollHRManagement/>
        <CTA heading={ctaHeading} text={ctaText} btn={ctaBtn}/>
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