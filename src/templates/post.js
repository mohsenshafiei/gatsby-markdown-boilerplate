import React from "react"
import Layout from "../layout"
import { graphql } from "gatsby"
import style from "./style.module.scss"
import parse from "html-react-parser"
import SEO from "../components/seo"

const Post = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter
  const content = data.markdownRemark.excerpt
  const parsedContent = parse(content)
  return (
    <Layout>
      <SEO title={post.title} description={parsedContent} />
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
