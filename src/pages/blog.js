import React, {useState} from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"
import Blogcards from "../components/blogcards"


const BlogIndex = ({ data, location }) => {
  //General page settings
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  let numberOfPosts = 6 


  //Variables for filtering
  let params = new URLSearchParams(location.search.substring(1));
  let query = params.get("filter")
  let postsToDisplay = []
  let allTags = []


  //Prompt to CTA-compontent
  const ctaHeading = "Want to know more?"
  const ctaText = ""
  const ctaBtn = "Contact us today"


  //Program flow
  filteringPostsToDisplay()
  captureAllTags()


  //Functions
  function paramToUserInput(query) {
    console.log(query)
    console.log(document.querySelector(`#${query}`))
  }


  function filteringPostsToDisplay() {
    if (query === "all"){
      postsToDisplay = posts
    } else {
      let postsWithoutNull = posts.filter(post => post.frontmatter.tags !== null)
      postsToDisplay = postsWithoutNull.filter(post => post.frontmatter.tags.includes(query[0].toUpperCase() + query.substring(1)))
    }
  }
  

  function applyFilter() {
    let userInput = document.querySelector(".filter-input").value
    document.location = `/blog?filter=${(userInput.toLowerCase())}`
  }


  function viewMorePosts() {
    setState(prevState => {
      return {...prevState, number: filteredPosts.number + numberOfPosts}
    })
    if ((filteredPosts.number + numberOfPosts) > filteredPosts.array.length){
      document.querySelector(".view-more-btn").style.display = "none"
    }
  }


  function captureAllTags() {
    posts.map((individualPost) => 
      allTags.push(individualPost.frontmatter.tags),
    )
    allTags = allTags.flat()
    allTags = Array.from(new Set(allTags))
    allTags = allTags.filter(tag => tag != null)
  }


  //useState to be declared after all functions and variables
  const [filteredPosts, setState] = useState({
    array: postsToDisplay, 
    number: numberOfPosts
  })



  //Print content
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
      
      <div className="form-wrapper">
        <form className="filter-form">
        <label for="categories" className="filter-label">Filter by: </label>
          <select id="categories" name="categories" className="filter-input" onLoad={paramToUserInput(query)}>
            <option value="all" className="filter-option" id="all">All</option>
            {allTags.map((tag) => (
              <option value={tag.toLowerCase()} className="filter-option" id={tag.toLowerCase()}>{tag}</option>
            ))}
          </select>
          <button className="neutral-btn apply-filter" onClick={applyFilter} type="button">Filter</button>
        </form>
        <div className="empty-div-for-grid"></div>
        <div className="all-posts-btn-wrapper">
          <a href="allposts"><button className="view-all-btn">View list of posts</button></a>
        </div>
      </div>
      
      <Blogcards filteredPosts={filteredPosts}/>

      <div className="view-more-wrapper">
        <button className="cta-btn view-more-btn" onClick={viewMorePosts}>View more posts</button>
      </div>
      
      <CTA ctaHeading={ctaHeading} ctaText={ctaText} ctaBtn={ctaBtn}/>
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
