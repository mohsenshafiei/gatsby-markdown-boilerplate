import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "@styles"
import style from "./style.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={style.container}>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  // children: PropTypes.node.isRequired,
}

export default Layout
