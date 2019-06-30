import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import style from './style.module.scss'

const Header = ({ siteTitle }) => (
  <header className={style.container}>
    <div className={style.wlink}>
      <Link to={`/`} className={style.link}>Home</Link>
      <Link to={`/blog`} className={style.link}>Blog</Link>
      <Link to={`/biography`} className={style.link}>Biography</Link>
      <Link to={`/stories`} className={style.link}>Stories</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
