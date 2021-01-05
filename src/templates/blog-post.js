import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"
import Sidebar from "../components/sidebar"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const allPosts = data.allMarkdownRemark.nodes

  const tags = post.frontmatter.tags
  const heading = "Want to know more?"
  const text = ""
  const btn = "Contact us today"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className="blogpost-parent">
        <section className="blogpost">
        
          <h2 itemProp="headline">{post.frontmatter.title}</h2>
          <p className="date-and-tags">
            {post.frontmatter.date}  
            <ul className="taglist">
              {tags.map((tag) => (
                <li key={tag + `tag`}>
                  <a href={`/blog?filter=${(tag.toLowerCase())}`}>{tag}</a>
                </li>
              ))}
            </ul>
          </p>
          <div className="img-wrapper"><img src={post.frontmatter.featuredimage} alt= "featured image thumbnail for post" itemProp="image"></img></div>
        
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody" className="blog-text"
          />

          <a className="go-back" href="/blog?filter=all">&larr; Go back to blog overview</a>

          <div className="mobile-about">
            <h3>About Internago</h3>
            <p>Internago offers subsidiary management, HR and international payroll services combined with international payroll software and professional business advisory services. </p>
          </div> 
        </section>
        
      <Sidebar allPosts={allPosts} className="sidebar"/>
 
      </div>
      <CTA heading={heading} text={text} btn={btn}/>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
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
          title
          tags
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredimage
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
