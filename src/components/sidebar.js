import React from "react"
import { Link } from "gatsby"

const Sidebar = ({heading, text, btn}) => {  
    return (
      <aside className="sidebar">
          <div className="sidebar-about">
            <h3>About Internago</h3>
            <p>Internago offers subsidiary management, HR and international payroll services combined with international payroll software and professional business advisory services. </p>
          </div>
          <div className="sidebar-recent">
            <h3>Recent Posts</h3>
            <p>Blabla</p>
          </div>
          <div className="sidebar-categories">
            <h3>Categories</h3>

          </div>
      </aside>
    )
  }
  
  
  export default Sidebar