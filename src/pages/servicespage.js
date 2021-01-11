import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ServicesHero from "../components/serviceshero"
import IntroSection from "../components/introsection"
import AdvisoryCards from "../components/asvisorycards"
import Advisoryincorp from "../components/advisoryincorp"
import AccountingIcons from "../components/accountingicons"
import Quotes from "../components/quotes"
import SEO from "../components/seo"
import CTA from "../components/cta"


const ServicesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const advisoryHeading = "Advisory and incorporation services"
  const advisoryText1 = "Our experienced team of consultants have worked in various industries and with different challenges, and can take care of the time consuming and complex administrative tasks before, during and after you enter a new market."
  const advisoryText2 = ""

  const accountingHeading = "Accounting"
  const accountingText1 = "Internago can also support you in selecting a local accounting partner and handle the implementation and setup. We have an extensive network and long experience of finding the best partners for our clients."
  const accountingText2 = "With Internago you will always get:"

  const quotesArray = [
    {
      quote: "The implementation process went very smooth, and the fact that is was online made it easier and more transparent for us at the HQ to follow the progress, and we could update the necessary information for incorporation, bank and fiscal codes etc. in realtime.",
      author: "Rickard Lundström",
      company: "CFO Rototilt Group AB"
    },
    {
      quote: "I recommend Internago to companies that want to develop their business and grow into new markets.",
      author: "Fabio Frozzi",
      company: "CEO, Co.Ma SpA"
    },
    {
      quote: "Internago has handled our international operations very professionally, from setup to continuous management. Their service is professional yet personal, with a solid web portal for managing all documentation.",
      author: "Max Friberg",
      company: "Founder, Inex One"
    }
  ]

  const ctaHeading = "What's next?"
  const ctaText = "A complete range of services to support your international business. We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions."
  const ctaBtn = "Contact us today"

  return (
    <Layout location={location} title={siteTitle}>
        <SEO title="Services" />
        <ServicesHero/>
        <IntroSection introHeading={advisoryHeading} introText1={advisoryText1} introText2={advisoryText2}/>
        <AdvisoryCards/>
        <Advisoryincorp/>
        <IntroSection introHeading={accountingHeading} introText1={accountingText1} introText2={accountingText2}/>
        <AccountingIcons/>
        <Quotes quotesArray={quotesArray}/>
        <CTA ctaHeading={ctaHeading} ctaText={ctaText} ctaBtn={ctaBtn}/>
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