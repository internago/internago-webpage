import React from "react"

const FilterForm = ({allTags}) => {  
    function applyFilter() {
        let userInput = document.querySelector(".filter-input").value
        document.location = `/blog?filter=${(userInput.toLowerCase())}`
    }

    return (
        <div className="form-wrapper">
            <form className="filter-form">
            <label for="categories" className="filter-label">Filter by: </label>
            <select id="categories" name="categories" className="filter-input">
                <option value="all" className="filter-option" id="all">All</option>
                {allTags.map((tag) => (
                <option value={tag.toLowerCase()} className="filter-option" id={tag.toLowerCase()}>{tag}</option>
                ))}
            </select>
            <button className="neutral-btn apply-filter" onClick={applyFilter} type="button">Filter</button>
            </form>
            <div className="empty-div-for-grid"></div>
            <div className="all-posts-btn-wrapper">
            <a href="/allposts"><button className="view-all-btn">View list of posts</button></a>
            </div>
      </div>
    )
  }
  
  
export default FilterForm