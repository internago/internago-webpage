import React, {useState} from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"
import Blogcards from "../components/blogcards"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  let numberOfPosts = 2

  let params = new URLSearchParams(document.location.search.substring(1));
  let query = params.get("filter")

  const [filteredPosts, setState] = useState({array: posts.filter(post => post.frontmatter.tags.includes(query[0].toUpperCase() + query.substring(1))), number: numberOfPosts})
  //const [filteredPosts, setState] = useState(() => {array: posts.filter(post => post.frontmatter.tags.includes(query[0].toUpperCase() + query.substring(1))), number: numberOfPosts})
  
  
  function applyFilter() {
      let userInput = document.querySelector(".filter-input").value

      if (userInput == "all") {
        setState(prevState => {
          return {...prevState, array: posts}
        })
      } else {
        setState(prevState => {
          return {...prevState, array: posts.filter(post => post.frontmatter.tags.includes(userInput))}
        })
      }
  }

  function applyFilterFromURL() {
    {


      if (query == "all") {
        setState(prevState => {
          return {...prevState, array: posts}
        })
      } else {
        setState(prevState => {
          return {...prevState, array: posts.filter(post => post.frontmatter.tags.includes(query[0].toUpperCase() + query.substring(1)))}
        })
      }
  }
}

  function viewMorePosts() {
    setState(prevState => {
      return {...prevState, number: filteredPosts.number + numberOfPosts}
    })
    if ((filteredPosts.number + numberOfPosts) > filteredPosts.array.length){
      document.querySelector(".view-more-wrapper").style.display = "none"
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
    <Layout location={location} title={siteTitle} onLoad={applyFilterFromURL}>
      <SEO title="Blog &amp; News" />

      <form className="filter-form">
      <label for="categories" className="filter-label">Filter by: </label>
        <select id="categories" name="categories" className="filter-input">
          <option value="all" className="filter-option">All</option>
          {allTags.map((tag) => (
            <option value={tag.toLowerCase()} className="filter-option">{tag}</option>
          ))}
        </select>
        <button className="cta-btn apply-filter" onClick={applyFilterFromURL} type="button">Filter</button>
      </form>
      
      <Blogcards filteredPosts={filteredPosts}/>
      <div className="view-more-wrapper"><button className="cta-btn" onClick={viewMorePosts}>View more posts</button></div>
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
