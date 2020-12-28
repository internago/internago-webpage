import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
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
      <SEO title="Blog &amp; News" />
      <section className="overview-section">

          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const image = post.frontmatter.featuredimage 


            return (
              <div className="blog-card" key={post.fields.slug}>
                <div>
                  <div className="img-wrapper"><img src={image} alt="featured image thumbnail for post" itemProp="image"></img></div>
                  <h3 itemProp="headline">{title}</h3>
                  <small>{post.frontmatter.date}</small>
        
                    
                  <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                  />
                </div> 

                <Link className="read-more" to={post.fields.slug} itemProp="url">Read more</Link>
   
              </div>
            )
          })}
      </section>

      <CTA heading={heading} text={text} btn={btn}/>
    </Layout>
  )
}

export default BlogIndex

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
          featuredimage
        }
      }
    }
  }
`
