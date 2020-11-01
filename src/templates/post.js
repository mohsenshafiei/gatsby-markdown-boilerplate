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

const Post = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter
  const content = data.markdownRemark.excerpt
  const parsedContent = parse(content)
  return (
    <Layout>
      <SEO
        title={titleCase(post.title)}
        description={`This blog post is written by ${post.author} on ${post.date} and it is about ${post.title}`}
      />
      <div className={style.container}>
        <h2 className={style.title}>{post.title}</h2>
        <span className={style.by}>By</span>{" "}
        <span className={style.info}>{post.author}</span>
        <span className={style.date}>Published On {post.date}</span>
        <div className={style.content}>{parsedContent}</div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date
      }
      excerpt(pruneLength: 20000, format: HTML, truncate: true)
    }
  }
`

export default Post
