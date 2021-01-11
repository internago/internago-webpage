import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Clients from "../components/clients"
import Services from "../components/services"
import Markets from "../components/markets"
import WhyInternago from "../components/whyinternago"
import HowItWorks from "../components/howitworks"
import CTA from "../components/cta"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  const ctaHeading = "What's next?"
  const ctaText = "A complete range of services to support your international business. We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions."
  const ctaBtn = "Contact us today"

  const marketsHeading = "Your markets – our objective"
  const marketsText1 = "Internago is currently delivering payroll services and related services on main European markets, both directly or together with well selected local partners."
  const marketsText2 = "Contact us to know more on how we can support you in France, Italy, Sweden, Germany, Spain, UK, Holland or other countries of interest. Contact our sales team to know more about our services."
  const marketsText3 = ""
  const marketsBtn = "Contact country of interest"


  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Hero/>
      <Clients/>
      <Services/>
      <Markets marketsHeading={marketsHeading} marketsText1={marketsText1} marketsText2={marketsText2} marketsText3={marketsText3} marketsBtn={marketsBtn}/>
      <WhyInternago/>
      <HowItWorks/>
      <CTA ctaHeading={ctaHeading} ctaText={ctaText} ctaBtn={ctaBtn}/>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
