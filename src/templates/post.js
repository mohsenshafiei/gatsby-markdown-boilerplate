import React from 'react'
import Layout from '../layout'
import { graphql } from 'gatsby'
import style from './style.module.scss';

const Post = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter
  const content = data.markdownRemark.excerpt
  console.log(content);
  return (
    <Layout>
      <h2 className={style.title}>{post.title}</h2>
      By {' '} <span className={style.info}>{post.author}</span>
      {' | '}<span className={style.info}>{post.date }</span>
      <p className={style.content}>{content}</p>
    </Layout>
  );
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
      excerpt(pruneLength: 1000, format: PLAIN, truncate: true)
    }
  }
`

export default Post
