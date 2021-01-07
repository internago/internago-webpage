import React from "react"
import { Link, graphql } from "gatsby"

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
  const heading = "What's next?"
  const text = "A complete range of services to support your international business. We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions."
  const btn = "Contact us today"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Hero/>
      <Clients/>
      <Services/>
      <Markets/>
      <WhyInternago/>
      <HowItWorks/>
      <CTA heading={heading} text={text} btn={btn}/>
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
