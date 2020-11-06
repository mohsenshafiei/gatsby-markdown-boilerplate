import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import style from "./style.module.scss"

const Header = ({ siteTitle }) => (
  <div className={style.header}>
    <div className={style.wlink}>
      <Link className={style.link} to="/">
        HOME
      </Link>
      <Link className={style.link} to="/blog/">
        BLOG
      </Link>
      <Link className={style.link} to="/note/">
        NOTES
      </Link>
      {/* <Link className={style.link} to="/story/">
        STORIES
      </Link>
      <Link className={style.link} to="/book/">
        BOOKS
      </Link> */}
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
