import React, {useState} from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"
import Blogcards from "../components/blogcards"


const AllPosts = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  let allSlugs = []
  posts.map((individualPost) => 
    allSlugs.push(individualPost.fields.slug),
  )

  let allTitles = []
  posts.map((individualPost) => 
    allTitles.push(individualPost.frontmatter.title),
  )

  


  const heading = "Want to know more?"
  const text = ""
  const btn = "Contact us today"


  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Blog &amp; News" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog &amp; News"/>
      <div className="all-posts-wrapper">
        <h2>List of all blog posts</h2>
        <ul className="all-posts-list">
        {allTitles.map((title, index) => (
            <li className="recent-li" key={title + `title`}>
              <a href={`${(allSlugs[index])}`}>{title}</a>
            </li>
          ))}
        </ul>
     </div>
      
      
      
      
      <CTA heading={heading} text={text} btn={btn}/>
    </Layout>
  )
}

export default AllPosts

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
        }
      }
    }
  }
`
