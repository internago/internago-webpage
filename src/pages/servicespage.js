import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import ServicesHero from "../components/serviceshero"
import SEO from "../components/seo"
import CTA from "../components/cta"

const ServicesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const heading = "What's next?"
  const text = "A complete range of services to support your international business. We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions."
  const btn = "Contact us today"

  return (
    <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <ServicesHero/>
        <CTA heading={heading} text={text} btn={btn}/>
    </Layout>
  )
}

export default ServicesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`