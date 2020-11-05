import React from "react"
import Layout from "../layout"
import style from "./blog.module.scss"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/post"
import SEO from "../components/seo"

const BLogPage = () => (
  <Layout>
    <SEO title="Blog" description="List of blog post" />
    <div className={style.container}>
      <StaticQuery
        query={postsQuery}
        render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                return (
                  <Post
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    tags={node.frontmatter.tags}
                    slug={node.fields.slug}
                    body={node.excerpt}
                    key={node.id}
                  />
                )
              })}
            </div>
          )
        }}
      ></StaticQuery>
    </div>
  </Layout>
)

const postsQuery = graphql`
  query postsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/posts/.*.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default BLogPage
