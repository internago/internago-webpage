import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  
  let filteredPosts = posts

  
  
  function handleClick() {
      let userInput = document.querySelector(".filter-input").value
      console.log(userInput)

      if (userInput == "all") {
        filteredPosts = posts
        console.log(filteredPosts)
      } else {
        filteredPosts = posts.filter(post => post.frontmatter.tags.includes(userInput))
        console.log(filteredPosts)
      }
  }

  const heading = "Want to know more?"
  const text = ""
  const btn = "Contact us today"

  let allTags = []
  posts.map((individualPost) => 
    allTags.push(individualPost.frontmatter.tags),
  )

  allTags = allTags.flat()
  allTags = Array.from(new Set(allTags))
  allTags = allTags.filter(tag => tag != null)

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
      <form className="filter-form">
      <label for="categories" className="filter-label">Filter by: </label>
        <select id="categories" name="categories" className="filter-input">
          <option value="all" className="filter-option">All</option>
          {allTags.map((tag) => (
            <option value={tag} className="filter-option">{tag}</option>
          ))}
        </select>
        <button className="cta-btn apply-filter" onClick={handleClick} type="button">Filter</button>
      </form>
      <section className="overview-section">
        {
        filteredPosts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const image = post.frontmatter.featuredimage 
          let thisPostsTags = post.frontmatter.tags


          return (
            <div className="blog-card" key={post.fields.slug}>
              <div>
                <div className="img-wrapper"><img src={image} alt="featured image thumbnail for post" itemProp="image"></img></div>
                <h3 itemProp="headline"><Link to={post.fields.slug} itemProp="url">{title}</Link></h3>
                <small>{post.frontmatter.date}  ||
                <ul className="overview-taglist">
                  {thisPostsTags.map((tag) => (
                    <li key={tag + `tag`}><Link to={`/tags/${(tag)}/`}>{tag}</Link> </li>
                  ))}
                </ul>  
                </small>        
                    
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
          tags
        }
      }
    }
  }
`
