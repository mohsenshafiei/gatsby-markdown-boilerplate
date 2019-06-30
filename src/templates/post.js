import React from 'react'
import Layout from '../layout'
import { graphql } from 'gatsby'
// import { slugify } from '../util/utilityFunctions' 

const SinglePost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <span className="text-info">{post.date}</span> by{' '}
      <span className="text-info">{post.author}</span>
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
    }
  }
`

export default SinglePost
