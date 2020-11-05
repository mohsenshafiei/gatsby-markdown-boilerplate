import React from "react"
import Layout from "../layout"
import { graphql } from "gatsby"
import style from "./style.module.scss"
import parse from "html-react-parser"
import SEO from "../components/seo"

const titleCase = str => {
  var splitStr = str.toLowerCase().split(" ")
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    if (splitStr[i].length > 3) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
  }
  // Directly return the joined string
  return splitStr.join(" ")
}

const visit = pathname => {
  if (typeof window === `undefined`) return
  if (window && window.localStorage) {
    const visited = window.localStorage.getItem("visitedPages")
    const visitedArray = JSON.parse(visited) || {}
    const newVisited = JSON.stringify({ ...visitedArray, [pathname]: true })
    window.localStorage.setItem("visitedPages", newVisited)
  }
}

const Book = ({ data, pageContext, location }) => {
  const book = data.markdownRemark.frontmatter
  const content = data.markdownRemark.excerpt
  const parsedContent = parse(content)
  visit(location.pathname)
  return (
    <Layout>
      <SEO
        title={titleCase(book.title)}
        description={`This post is written by ${book.author} on ${book.date} and it is about ${book.title}`}
      />
      <div className={style.container}>
        <h2 className={style.title}>{book.title}</h2>
        <span className={style.by}>By</span>{" "}
        <span className={style.info}>{book.author}</span>
        <span className={style.date}>Published On {book.date}</span>
        <div className={style.content}>{parsedContent}</div>
        <div className={style.tagWrapper}>
          {book.tags.map((tag, index) => {
            return (
              <span className={style.tag} key={index}>
                {tag}
              </span>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const bookQuery = graphql`
  query blogBookBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date
        tags
      }
      excerpt(pruneLength: 20000, format: HTML, truncate: true)
    }
  }
`

export default Book
