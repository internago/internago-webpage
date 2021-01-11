import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import AboutHero from "../components/abouthero"
import AboutInternago from "../components/aboutinternago"
import Founders from "../components/founders"
import CTA from "../components/cta"


const PayrollPortal = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    const ctaHeading = "What's next?"
    const ctaText = "A complete range of services to support your international business. We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions."
    const ctaBtn = "Contact us today"
  
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="About us" />
        <AboutHero/>
        <AboutInternago/>
        <Founders/>
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