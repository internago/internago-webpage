import React from "react"
import { Link } from "gatsby"

const Sidebar = ({allPosts}) => {  
  
  let sixTimes = ["","","","","",""]

  let allTags = []
  allPosts.map((individualPost) => 
    allTags.push(individualPost.frontmatter.tags),
  )
  allTags = allTags.flat()
  allTags = Array.from(new Set(allTags))
  allTags = allTags.filter(tag => tag != null)

  let allTitles = []
  allPosts.map((individualPost) => 
    allTitles.push(individualPost.frontmatter.title),
  )

  /*if (allTitles.length > 6) {
    allTitles.pop()
  }*/

  allTitles = allTitles.slice(0, 6)



    return (
      <aside className="sidebar">
      <div className="sidebar-about">
        <h3>About Internago</h3>
        <p>Internago offers subsidiary management, HR and international payroll services combined with international payroll software and professional business advisory services. </p>
      </div>
      <div className="sidebar-recent">
        <h3>Recent Posts</h3>
        <ul className="recent-ul">
          {allTitles.map((title) => (
            <li className="recent-li" key={title + `title`}>
              <Link to={`${(title)}/`}>{title}</Link>
            </li>
          ))}
        </ul> 
      </div>
      <div className="sidebar-categories">
        <h3>Categories</h3>
        <ul className="categories-ul">
          {allTags.map((tag) => (
            <li className="categories-li" key={tag + `tag`} > 
              <Link to={`/tags/${(tag)}/`}>{tag}</Link>
            </li>
          ))}
        </ul> 
      </div>
    </aside>
    )
  }
  
  
  export default Sidebar