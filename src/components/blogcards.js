import React from "react"
import { Link } from "gatsby"

const Blogcards = ({filteredPosts}) => {  
    let postsToDisplay = filteredPosts.array.slice(0, filteredPosts.number)
    
    return (
    <section className="overview-section">
        {
          postsToDisplay.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const image = post.frontmatter.featuredimage 
          let thisPostsTags = post.frontmatter.tags

          if (thisPostsTags === null) {
            thisPostsTags = []
          }

          return (
            <div className="blog-card" key={post.fields.slug}>
              <div>
                <div className="img-wrapper"><img src={image} alt="featured thumbnail for post" itemProp="image"></img></div>
                <h3 itemProp="headline"><Link to={post.fields.slug} itemProp="url">{title}</Link></h3>
                <small>{post.frontmatter.date}  ||
                <ul className="overview-taglist">
                  {thisPostsTags.map((tag) => (
                    <li key={tag + `tag`}><a href={`/blog?filter=${(tag.toLowerCase())}`}>{tag}</a></li>
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
    )
  }
  
  
  export default Blogcards