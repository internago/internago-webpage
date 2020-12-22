import React from "react"
import { Link } from "gatsby"

import Logo from '../images/logos/internago.png'


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>

      
      <nav>
        <img src={Logo} className='internago-img'></img>
      
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">What we offer</a></li>
            <li><a href="#">Blog and News</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#" className='contact-btn'>Contact us</a></li>
            <li><a href="#" className='cta-btn'>Book a demo</a></li>
          </ul>
      </nav>

      <header className="global-header">{header}</header>

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
