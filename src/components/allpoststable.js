import React from "react"

const AllPostsTable = ({posts}) => {  

    let allSlugs = posts.map(individualPost => individualPost.fields.slug)
    let allTitles = posts.map(individualPost => individualPost.frontmatter.title)
    let allTags = posts.map(individualPost => individualPost.frontmatter.tags)

    allTags.forEach((individualPostsTags, index) => {
        if (individualPostsTags == null) {
          allTags.splice(index, 1, [])
        }
      })
      

    return (
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
    )
  }
  
  
export default AllPostsTable