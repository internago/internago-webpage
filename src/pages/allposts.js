import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"


const AllPosts = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  let allSlugs = posts.map(individualPost => individualPost.fields.slug)
  let allTitles = posts.map(individualPost => individualPost.frontmatter.title)
  let allTags = posts.map(individualPost => individualPost.frontmatter.tags)

  allTags.forEach((individualPostsTags, index) => {
    if (individualPostsTags == null) {
      allTags.splice(index, 1, [])
    }
  })


  

  //CTA content
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
        <table className="all-posts-table">
          <tr>
            <th>Tags</th>
            <th>Titles</th>
          </tr>
          {posts.map((post, index) => (
            <tr>
              <td>
                <ul className="all-posts-list">
                  {
                    allTags[index].map(tag => (
                      <li><a href={`/blog?filter=${(tag.toLowerCase())}`}>{tag}</a></li>
                    ))
                  }
                </ul>
              </td>
              <td><a href={`${(allSlugs[index])}`}>{allTitles[index]}</a></td>
            </tr>
          ))}
        </table>
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
          tags
        }
      }
    }
  }
`
